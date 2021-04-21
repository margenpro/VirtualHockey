import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
  // statusBar: {
  //   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  // },

});
