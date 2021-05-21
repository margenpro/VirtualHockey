import { StyleSheet, Dimensions } from "react-native";
import fontStyle from "../../assets/styles/fontStyles";
import { colorsPalette } from "../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  layoutContainer: {
    flex: 1,
    margin: 20,
    // justifyContent: 'flex-start'
  },
  headerContainer: {
    flex: 1,
    // marginBottom: 20,
    // alignItems: "center",
  },
  actionButton: {
    ...fontStyle.fontType,
    position: "relative",
    backgroundColor: colorsPalette.colorTwo,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: width * 0.8,
    alignSelf: "center",
    margin: 20,
  },
  inputUser: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: colorsPalette.colorOne,
    borderBottomWidth: 2,
  },
  inputPassword: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: colorsPalette.colorOne,
    borderBottomWidth: 2,
    marginBottom: -4,
  },
  inputIcon: {
    ...fontStyle.fontType,
    borderBottomColor: colorsPalette.colorOne,
    borderBottomWidth: 2,
    marginBottom: 0,
  },
  textTouch: {
    ...fontStyle.fontType,
    alignSelf: "center",
    marginTop: 3,
    alignItems: "center",
  },
  mainLogo: {
    position: "relative",
    minWidth: 80,
    minHeight: 80,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  centeredAligned: {
    alignItems: "center",
    // justifyContent: 'center',
  },
  spacingWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowedAndWrapped: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  pointsContainer: {
    alignContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  flexOne: {
    flex: 1,
  },
});
