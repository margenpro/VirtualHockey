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
    subTitle: {
        ...fontType,
        position: "relative",
        fontStyle: "normal",
        color: "#6EC1E4",
        fontWeight: "bold",
        marginLeft: 10
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
        marginTop: 20,
        alignSelf: "center",
        fontSize: 16,
        top: 6,
      },
});
