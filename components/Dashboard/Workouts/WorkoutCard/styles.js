import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  whiteTransparentBox: {
    flex: 1,
    paddingVertical: 10,
    width: width * 0.9,
    // margin: 20,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 10,
    // overflow: 'hidden',
  },
  videoImage: {
    alignItems: "center",
    alignSelf: "center",
    // resizeMode: "cover",
    width: "100%",
    height: 200,
  },
  cardContainer: { flex: 1 },
  textoInfo: {
    fontFamily: "comfortaa",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

});
