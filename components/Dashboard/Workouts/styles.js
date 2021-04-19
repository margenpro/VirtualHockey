import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height
  },
  username: {
    fontFamily: "comfortaa",
    fontSize: 30,
    color: '#ffffff',
  },
  superior: {
    flex: 1,
  },
  middle: {
    flex: 1,
  },
  inferior: {
    flex: 1,
  },

});
