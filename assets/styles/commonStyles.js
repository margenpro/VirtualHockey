import { StyleSheet } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'
import { colorsPalette } from '../../assets/styles/colorsPalette'

export default StyleSheet.create({
    layoutContainer: {
        flex: 1,
        margin: 20
    },
    headerContainer: {
        marginBottom: 20
    },
    actionButton: {
        ...fontStyle.fontType,
        position: "relative",
        backgroundColor: colorsPalette.colorOne,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 250,
        top: 8,
        alignSelf: "center"
    }
});
