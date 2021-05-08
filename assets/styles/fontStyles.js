import { StyleSheet } from "react-native";

export const fontType = {
    fontFamily: "comfortaa",
}

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
        fontSize: 20
    },
    footerText: {
        ...fontType,
        position: "relative",
        fontStyle: "normal",
        color: "#6EC1E4",
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 18,
        top: 6,
      },
});
