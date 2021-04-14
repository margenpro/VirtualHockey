import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    margin: 20
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350
  },
  title: {
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    fontWeight: "bold"
  },
  input: {
    fontStyle: "normal",
    color: "white",
    height: 40,
    width: 250,
  },
  footer: {
    position: "relative",
    fontStyle: "normal",
    color: "#6EC1E4",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    fontSize: 16
  },
  button: {
    position: "relative",
    backgroundColor: "#00AEEF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 250,
    alignSelf: "center"
  },
  buttonText: {
    fontStyle: "normal",
    color: "white",
    fontWeight: "normal",
    fontSize: 20
  },
  logo: {
    position: "relative",
    width: 200,
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    margin: 20,
    borderRadius: 100,
    resizeMode: "contain",
  }
});
