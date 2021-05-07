import { StyleSheet } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'
import {colorsPalette} from '../../assets/styles/colorsPalette'

console.log(fontStyle)

export default StyleSheet.create({

  input: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: colorsPalette.colorOne,
    borderBottomWidth: 2,
  },
  input2: {
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
    marginBottom: 0
  },
  textTouch: {
    ...fontStyle.fontType,
    alignSelf: "center",
    marginTop: 3,
    alignItems: "center",
  },
  logo: {
    position: "relative",
    width: 160,
    height: 160,
    alignItems: "center",
    alignSelf: "center",
    margin: 20,
    borderRadius: 100,
    resizeMode: "contain"
  }
});