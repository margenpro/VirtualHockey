import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../../assets/styles/colorsPalette"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  rowContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    borderColor: colorsPalette.colorOne,
    borderWidth: 2,
  },
  avatar: {
    flex: 1,
    width: 40,
    height: 40,
    borderColor: colorsPalette.colorOne,
    borderWidth: 1,
    marginTop: 2,
    marginRight: 50,
    marginLeft: 10,
    maxWidth: 60,
    maxHeight: 60,
  },
  points: {
    flex: 1,
    marginLeft: 50,
  },
  username: {
    flex: 1,
  }
});
