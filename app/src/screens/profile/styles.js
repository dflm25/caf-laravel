import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerProfile: {
    backgroundColor: "red",
  },
  textContainer: {
    marginLeft: 10,
  },
  headerProfileContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  topHeader: {
    backgroundColor: "#EC7E4A",
    width: width,
    height: 180,
  },
  header: {
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: "#fff",
    width: width - 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
    paddingVertical: 15,
  },
  resumenContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: width - 30,
  },
  resumenItem: {
    width: 80,
    height: 60,
    backgroundColor: "red",
  },
});

export default styles;
