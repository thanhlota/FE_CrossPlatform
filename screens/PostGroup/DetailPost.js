import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  TextInput,
  Keyboard,
  Modal,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Avatar from "../../components/Avatar";
import SpecifyPost from "../../components/SpecifyPost";
import BottomMenu from "../../components/BottomMenu";
import Comment from "../../components/Comment";
import { getComments, addComment, deletePost } from "../../api";
import LoadingComment from "../../components/LoadingComment";
import DeleteModal from "../../components/DeleteModal";
import AppContext from "../../context/AppContext";
import { TextUtility } from "../../ultis/TextUtility";
import Statusbar from "../../components/Statusbar";
import { useNavigation } from "@react-navigation/native";
const COMMENTS_PER_LOAD = 8;

const FixedBottomBar = ({ id, _addComment, setInputPosition }) => {
  const appContext = useContext(AppContext);
  const [sendComment, setSendComment] = useState("");
  const textInputRef = useRef();
  const addNewComment = async () => {
    await addComment(id, sendComment, appContext.loginState.token)
      .then((res) => {
        _addComment(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.BottomBar}>
      <Avatar small />
      <View style={styles.subBottomBar}>
        <TextInput
          ref={textInputRef}
          multiline={true}
          placeholder="Viết bình luận..."
          style={{ paddingLeft: 8 }}
          onChangeText={(text) =>
            setSendComment(TextUtility.replaceStringWithIcon(text))
          }
          onFocus={() => setInputPosition(225)}
          onBlur={() => {
            Keyboard.dismiss();
            setInputPosition(0);
          }}
          value={sendComment}
        />
      </View>
      {sendComment && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            textInputRef.current.clear();
            addNewComment();
          }}
        >
          <MaterialIcons name="send" size={24} color="#3a86e9" />
        </TouchableOpacity>
      )}
    </View>
  );
};
function FlatListHeader({
  params,
  setModalVisible,
  numComment,
  setInitialPost,
}) {
  // console.log(numComment);
  return (
    <>
      <SpecifyPost
        id={params.id}
        avatar={params.avatar}
        userName={params.userName}
        timeCreated={params.timeCreated}
        description={params.description}
        numLike={params.numLike}
        numComment={numComment}
        images={params.images}
        is_liked={params.is_liked}
        self_liked={params.self_liked}
        numLike2={params.numLike2}
        samePer={params.samePer}
        authorId={params.authorId}
        setModalVisible={setModalVisible}
        status={params.status}
        setInitialPost={setInitialPost}
      />
      <View style={styles.Separator} />
      <View style={{ padding: 8 }}>
        <Text>{numComment} comment</Text>
      </View>
      <View style={styles.Separator} />
    </>
  );
}
export default DetailPost = ({ route }) => {
  const appContext = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [inputPosition, setInputPosition] = useState(0);
  const [loadingModal, setLoadingModal] = useState(false);
  const params = route.params;
  const [numComment, setNumComment] = useState(params.numComment);
  const [numLike, setNumLike] = useState(params.numLike);
  const flatListRef = useRef();
  const personal = params.authorId === appContext.loginState.user_id;
  const [initialPost, setInitialPost] = useState({});
  // console.log(deleteModalVisible);
  const renderComment = ({ item }) => {
    return (
      <Comment
        name={item.poster.name}
        comment={item.comment}
        time={item.created}
        avatar={item.poster.avatar}
      />
    );
  };
  const getData = async () => {
    await getComments(
      params.id,
      index,
      COMMENTS_PER_LOAD,
      appContext.loginState.token
    )
      .then((res) => {
        setData([...data, ...res.data.data]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  const _addComment = (newComment) => {
    setData([newComment, ...data]);
    setNumComment(parseInt(numComment) + 1);
    setInputPosition(0);
    flatListRef.current.scrollToIndex({
      index: 0,
      animated: true,
      viewPosition: 0,
    });
  };
  const _deletePost = () => {
    setDeleModalVisible(false);
    setLoadingModal(true);
    deletePost(params.id)
      .then((res) => {
        setLoadingModal(false);
      })
      .catch((err) => {
        setLoadingModal(false);
        console.log(err);
      });
  };
  useEffect(() => {
    if (!isLoading) setIsLoading(true);
    console.log("UseEffect call!");
    getData();
  }, [index]);
  return (
    <>
      <Statusbar />
      <View style={styles.Container}>
        <View style={styles.CommentContainer}>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderComment}
            keyExtractor={(item) => item.id}
            onEndReached={() => {
              setIndex(index + COMMENTS_PER_LOAD);
            }}
            onEndReachedThreshold={0}
            extraData={index}
            ListEmptyComponent={
              numComment != "0" ? (
                <LoadingComment />
              ) : (
                <View
                  style={{
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Bài viết này hiện chưa có bình luận nào</Text>
                </View>
              )
            }
            ListFooterComponent={
              <View style={{ width: "100%", height: 100 }}></View>
            }
            ListHeaderComponent={
              <FlatListHeader
                params={params}
                setModalVisible={setModalVisible}
                numComment={numComment}
                setInitialPost={setInitialPost}
              />
            }
          />
          {isLoading && (
            <View>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          )}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: inputPosition,
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <FixedBottomBar
            id={params.id}
            _addComment={_addComment}
            setInputPosition={setInputPosition}
          />
        </View>
        {isModalVisible && (
          <BottomMenu
            setModalVisible={setModalVisible}
            personal={personal}
            setDeleModalVisible={setDeleModalVisible}
            initialPost={initialPost}
          />
        )}
        {deleteModalVisible && (
          <DeleteModal
            setDeleModalVisible={setDeleModalVisible}
            _deletePost={_deletePost}
            back
            post_id={params.id}
            initialPost={initialPost}
          />
        )}
        {loadingModal && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <ActivityIndicator size="small" color="#000000" />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  CommentContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 8,
  },
  Separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#eeeeee",
  },
  BottomBar: {
    width: "100%",
    flexDirection: "row",
    padding: 8,
    borderColor: "rgba(0, 0, 0, 0.32)",
    borderWidth: 0.5,
    alignItems: "center",
  },
  subBottomBar: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    padding: 8,
    marginHorizontal: 6,
    marginRight: 10,
    marginTop: 6,
  },
});
