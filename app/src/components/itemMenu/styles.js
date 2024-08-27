import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 0.6,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
    fontWeight: 300,
  },
});

export default styles;
