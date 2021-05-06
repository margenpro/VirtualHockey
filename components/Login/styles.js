import { StyleSheet } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'

console.log(fontStyle)
export default StyleSheet.create({

  input: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: "#6EC1E4",
    borderBottomWidth: 2,
  },
  input2: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: "#6EC1E4",
    borderBottomWidth: 2,
    marginBottom: -4,
  },
  inputIcon: {
    ...fontStyle.fontType,
    borderBottomColor: "#6EC1E4",
    borderBottomWidth: 2,
    marginBottom: 0
  },
  textTouch: {
    ...fontStyle.fontType,
    alignSelf: "center",
    marginTop: 3,
    alignItems: "center",
  },
  button: {
    ...fontStyle.fontType,
    position: "relative",
    backgroundColor: "#00AEEF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 250,
    top: 8,
    alignSelf: "center"
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