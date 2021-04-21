import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const availableHeight = height - 105

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: availableHeight,
    maxHeight: availableHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  username: {
    fontFamily: "comfortaa",
    fontSize: 30,
    color: '#ffffff',
  },
  superior: {
    flex: 1,
    flexDirection: 'row',
  },
  middle: {
    flex: 8,
  },
  inferior: {
    flex: 4,
  },
  previousWorkouts: {
    fontFamily: "comfortaa",
    fontSize: 15,
    color: '#ffffff',
    padding: 10
  }
});
