import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
  imagenTitulo: {
    flex: 1,
    width: width * .9,
    height: 150,
    resizeMode: 'contain',
  },
});
