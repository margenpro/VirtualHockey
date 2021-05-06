import { StyleSheet } from "react-native";

const defaultFont = {
    fontFamily: "comfortaa",
}

export default StyleSheet.create({

    title: {
        ...defaultFont,
        fontSize: 38,
        textAlign: "center",
        color: "white"
    },
    subTitle: {
        ...defaultFont,
        position: "relative",
        fontStyle: "normal",
        color: "#6EC1E4",
        fontWeight: "bold",
        marginLeft: 10
    },
});
