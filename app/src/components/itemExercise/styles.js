import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme/styles";

const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  itemContainer: {
    width: width - 30,
    backgroundColor: theme.blue,
    flexDirection: "row",
    padding: 12,
    borderRadius: 14,
    position: "relative",
    marginBottom: 14,
  },
  imageItem: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: "500",
  },
  number: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: "400",
  },
  timeContainer: {
    flexDirection: "row",
  },
  levelContainer: {
    position: "absolute",
    right: 7,
    top: 5,
    backgroundColor: theme.primary,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  levelLabel: {
    color: "#fff",
    fontWeight: "400",
  },
});
