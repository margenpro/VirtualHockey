import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    margin: 20
  },
  pagetitle: {
    fontFamily:"comfortaa",
    fontSize: 38,
    textAlign: "center",
    color: "white"
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350
  },
  title: {
    fontFamily:"comfortaa",
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    fontWeight: "bold",
    marginLeft: 13
  },
  input: {
    fontFamily:"comfortaa",
    fontStyle: "normal",
    color: "white",
    height: 40,
    borderBottomColor: "#6EC1E4",
    borderBottomWidth: 2,
    paddingHorizontal: 4
  },
  footer: {
    fontFamily:"comfortaa",
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    fontSize: 16,
    top: 6
  },
  textTouch: {
    fontFamily:"comfortaa",
    alignSelf: "center",
    maxWidth: 200,
    maxHeight: 1,
    marginTop: 3,
    alignItems: "center",
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
  buttonText: {
    fontFamily:"comfortaa",
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
