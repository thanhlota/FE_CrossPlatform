import { View,StyleSheet } from "react-native";
export default LoadingComment = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.User} />
      <View style={styles.Comment} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    flexDirection: "row",
  },
  User: {
    width: 40,
    height: 40,
    borderRadius:20,
    backgroundColor: "#eeeeee",
    marginLeft: 8,
    marginRight: 8,
  },
  Comment: {
    borderRadius:20,
    width: 200,
    height: 50,
    backgroundColor: "#eeeeee",
  },
});
