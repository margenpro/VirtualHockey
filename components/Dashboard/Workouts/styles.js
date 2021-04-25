import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const availableHeight = height - 105

const font = {
  fontFamily: "comfortaa",
  color: '#ffffff',
}

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    minHeight: availableHeight,
    maxHeight: availableHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  username: {
    ...font,
    fontSize: 30,
    // marginRight: 'auto',
  },
  superior: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 30,
  },
  middle: {
    flex: 9,
    alignItems: 'center',
  },
  inferior: {
    flex: 6,
  },
  previousWorkouts: {
    ...font,
    fontSize: 15,
    fontWeight: '700',
    padding: 10
  },
  leftHeader: {
    justifyContent: 'center',
  },
  rightHeader: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 10,
  },
  ranking: {
    ...font,
    fontSize: 14,
    marginRight: 'auto',
    marginTop: 2,
  },
  welcome: {
    ...font,
    fontSize: 16,
    // marginRight: 'auto',
  },
  trophy: {
    width: 29,
    height: 29,
    marginBottom: 2,
  },
  workOutCard : {
  }

});
