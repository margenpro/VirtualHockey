import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    fontFamily:"comfortaa",
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: "#6EC1E4",
    borderBottomWidth: 2,
    paddingHorizontal: 4
  },
  button: {
    fontFamily:"comfortaa",
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
