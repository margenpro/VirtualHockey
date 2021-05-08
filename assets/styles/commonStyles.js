import { StyleSheet, Dimensions } from "react-native";
import fontStyle from '../../assets/styles/fontStyles'
import { colorsPalette } from '../../assets/styles/colorsPalette'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default StyleSheet.create({
    layoutContainer: {
        flex: 1,
        margin: 20,
    },
    headerContainer: {
        marginBottom: 20
    },
    actionButton: {
        ...fontStyle.fontType,
        position: "relative",
        backgroundColor: colorsPalette.colorTwo,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: width * .8,
        alignSelf: "center",
        margin: 20,
    },
    inputUser: {
        ...fontStyle.fontType,
        fontStyle: "normal",
        color: "white",
        height: 40,
        borderBottomColor: colorsPalette.colorOne,
        borderBottomWidth: 2,
    },
    inputPassword: {
        ...fontStyle.fontType,
        fontStyle: "normal",
        color: "white",
        height: 40,
        borderBottomColor: colorsPalette.colorOne,
        borderBottomWidth: 2,
        marginBottom: -4,
    },
    inputIcon: {
        ...fontStyle.fontType,
        borderBottomColor: colorsPalette.colorOne,
        borderBottomWidth: 2,
        marginBottom: 0
    },
    textTouch: {
        ...fontStyle.fontType,
        alignSelf: "center",
        marginTop: 3,
        alignItems: "center",
    },
    mainLogo: {
        position: "relative",
        width: 160,
        height: 160,
        alignItems: "center",
        alignSelf: "center",
        margin: 20,
        borderRadius: 100,
        resizeMode: "contain"
    },
    centeredAligned: {
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
