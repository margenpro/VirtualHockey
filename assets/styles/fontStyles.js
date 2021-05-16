import { StyleSheet } from "react-native";
import { colorsPalette } from "../../assets/styles/colorsPalette";

export const fontType = {
  fontFamily: "comfortaa",
};

export default StyleSheet.create({
  title: {
    ...fontType,
    fontSize: 38,
    textAlign: "center",
    color: "white",
  },
  inputHeader: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
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
});
