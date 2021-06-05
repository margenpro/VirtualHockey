import color from "color";
import { StyleSheet } from "react-native";
import { colorsPalette } from "../../assets/styles/colorsPalette";

export const fontType = {
  fontFamily: "Comfortaa_400Regular",
};

export default StyleSheet.create({
  title: {
    ...fontType,
    fontSize: 38,
    textAlign: "center",
    color: colorsPalette.colorThree,
  },
  subTitle: {
    ...fontType,
    fontSize: 22,
    textAlign: "center",
    color: colorsPalette.colorThree,
  },
  inputHeader: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: colorsPalette.colorOne,
    fontWeight: "bold",
    marginLeft: 10,
  },
  contentData: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: colorsPalette.colorThree,
    fontWeight: "bold",
    marginLeft: 10,
  },
  regularText: {
    ...fontType,
    fontSize: 20,
  },
  buttonText: {
    ...fontType,
    fontStyle: "normal",
    color: "white",
    fontWeight: "normal",
    fontSize: 20,
  },
  footerText: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    top: 6,
  },
  smallSize: {
    fontSize: 18,
  },
  normalSize: {
    fontSize: 22,
  },
  white: {
    color: colorsPalette.colorThree,
  },
  yellow: {
    color: colorsPalette.colorFour,
  },
  points: {
    color: colorsPalette.colorOne,
    fontSize: 24,
  },
  videoTitle: {
    ...fontType,
    color: colorsPalette.colorThree,
    fontSize: 24,
    fontWeight: "bold",
    // marginVertical: 2,
  },
  videoInfo: {
    ...fontType,
    color: colorsPalette.colorThree,
    fontSize: 14,
    textAlign: "justify",
    // lineHeight: 20,
  },
  oldTitle: {
    ...fontType,
    fontSize: 12,
    color: colorsPalette.colorThree,
    textAlign: "center",
  },
  username: {
    ...fontType,
    fontSize: 30,
    color: colorsPalette.colorThree,
    // marginRight: 'auto',
  },
});
