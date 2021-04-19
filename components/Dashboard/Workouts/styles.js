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
  containerImagenTitulo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-start',
    height: 80,
  },
  imagenTitulo: {
    flex: 1,
    width: width * .8,
    height: 80,
    resizeMode: 'contain'
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#6EC1E4',
    borderWidth: 4,
  },
  username: {
    fontFamily: "comfortaa",
    fontSize: 30,
    color: '#ffffff',
  },
  usernameAndPosition: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  trophyAndRanking: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  explanationMessage: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  explanationMessageText: {
    fontFamily: "comfortaa",
    fontSize: 15,
    color: '#ffffff',
  },
  explanationMessageYellow: {
    fontFamily: "comfortaa",
    fontSize: 15,
    color: '#E9D41B',
  },
  button: {
    width: width * .8,
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: "comfortaa",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600"
  },
  allWorkoutsText: {
    fontFamily: "comfortaa",
    fontSize: 15,
    color: '#ffffff',
  }
});
