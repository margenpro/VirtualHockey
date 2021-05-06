import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },

});