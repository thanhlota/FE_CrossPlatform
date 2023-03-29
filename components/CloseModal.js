import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const HEIGHT_MODAL = 200;
const WIDTH_MODAL = Dimensions.get("window").width;
export default CloseModal = ({changeModalVisible}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.header}>Tiếp tục với bài viết của bạn? </Text>
        <Text style={styles.content}>
          Nếu bỏ bây giờ, bạn sẽ mất bài viết này
        </Text>
        <View style={styles.Divider}/>
        <TouchableOpacity
          style={styles.touchableOpacity}
        >
          <Text style={{fontSize:17,color:"red"}}>Bỏ bài viết</Text>
        </TouchableOpacity>
        <View style={styles.Divider}/>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => changeModalVisible(false)}
        >
          <Text style={{fontSize:17,color:"#3a86e9",fontWeight:"bold"}}>Tiếp tục chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"rgba(0, 0, 0, 0.4)"
  },
  modal: {
    width: WIDTH_MODAL - 80,
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    flexDirection:"column",
  },
  header: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    marginTop: 8,
  },
  Divider: {
    width: "100%",
    height:0.3,
    backgroundColor: "#000000",
    marginTop:16,
    marginBottom:16
  },
});
