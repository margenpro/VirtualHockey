import { StyleSheet } from "react-native";

const defaultFont = {
    fontFamily: "comfortaa",
}

export default StyleSheet.create({

    title: {
        ...defaultFont,
        fontSize: 38,
        textAlign: "center",
        color: "white",
    },
    subTitle: {
        ...defaultFont,
        position: "relative",
        fontStyle: "normal",
        color: "#6EC1E4",
        fontWeight: "bold",
        marginLeft: 10
    },
    buttonText: {
        ...defaultFont,
        fontStyle: "normal",
        color: "white",
        fontWeight: "normal",
        fontSize: 20
    },
    footerText: {
        ...defaultFont,
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
});
