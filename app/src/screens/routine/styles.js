import { StyleSheet, Dimensions } from "react-native";

import theme from "../../theme/styles";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  ...theme,
  container: {
    flex: 0.2,
    backgroundColor: theme.terciary,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 18,
  },
  listContainer: {
    padding: 15,
    flex: 0.3,
    backgroundColor: "#fff",
  },
  calendar: {
    height: 100,
    paddingTop: 20,
    paddingBottom: 10,
  },
  recomendedContainer: {
    flex: 0.4,
  },
});

export default styles;
