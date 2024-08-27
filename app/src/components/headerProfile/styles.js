import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  HeaderProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width,
    padding: 15,
  },
  headerTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  nameLabel: {
    fontSize: 18,
  },
  phraseLabel: {
    fontSize: 16,
  },
});
