import { View, Text, StyleSheet } from "react-native";
import Avatar from "./Avatar";
export default Comment = ({ name, comment, time, avatar }) => {
  return (
    <View style={styles.Container}>
      <Avatar avatar={avatar} />
      <View style={styles.Comment}>
        <View style={styles.subContainer}>
          <Text style={styles.Header}>{name}</Text>
          <Text style={styles.Content}>{comment}</Text>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 4, paddingBottom: 4 }}>
          <Text style={styles.Time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    paddingTop:8
  },
  Comment: {
    flexWrap: "wrap",
    flexDirection: "column",
    marginLeft: 8,
  },
  subContainer: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 15,
    backgroundColor: "#eeeeee",
    maxWidth: 320,
    flex: 0,
  },
  Header: {
    fontSize: 14,
    fontWeight: "600",
  },
  Content: {
    fontSize: 14,
    fontWeight: "400",
  },
  Time: {
    fontSize: 14,
    color: "#747476",
  },
});
