import { StyleSheet } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'
console.log(fontStyle)
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    margin: 20
  },
  // pagetitle: {
  //   fontFamily:"comfortaa",
  //   fontSize: 38,
  //   textAlign: "center",
  //   color: "white"
  // },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350
  },
  // title: {
  //   fontFamily:"comfortaa",
  //   position: "relative",
  //   fontStyle: "normal",
  //   color: "#6EC1E4",
  //   fontWeight: "bold",
  //   marginLeft: 10
  // },
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
  footer: {
    ...fontStyle.fontType,
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    fontSize: 16,
    top: 6,
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
  buttonText: {
    ...fontStyle.fontType,
    fontStyle: "normal",
    color: "white",
    fontWeight: "normal",
    fontSize: 20
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
