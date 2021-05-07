import { StyleSheet } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'
import {colorsPalette} from '../../assets/styles/colorsPalette'

export default StyleSheet.create({
  input: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: colorsPalette.colorOne,
    borderBottomWidth: 2,
    paddingHorizontal: 4
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
