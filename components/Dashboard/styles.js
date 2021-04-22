import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
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

  containerImage: {
    justifyContent:'flex-start',
    marginBottom: 30
  },

  
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: '#6EC1E4',
    borderWidth: 4,
  },
  username: {
    fontFamily: "comfortaa",
    fontSize: 35,
    color: '#ffffff',
  },

  usernameYellow: {
    fontFamily: "comfortaa",
    fontSize: 35,
    color: '#E9D41B',
  },
  
  usernameAndPosition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },

  trophyAndRanking: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },

  explanationMessage: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    marginBottom: 25,
    marginHorizontal: 30,
  },

  explanationMessageText: {
    fontFamily: "comfortaa",
    fontSize: 22,
    color: '#ffffff',
    textAlign:'center'
  },
  explanationMessageYellow: {
    fontFamily: "comfortaa",
    fontSize: 22,
    color: '#E9D41B',
    textAlign:'center', 
  },


  button: {
    width: width * .8,
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "comfortaa",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600"
  },

  explanationMessageTextOr: {
    fontFamily: "comfortaa",
    fontSize: 25,
    color: '#ffffff',
    textAlign:'center',
    marginBottom: 15,
  },


  allWorkoutsText: {
    fontFamily: "comfortaa",
    fontSize: 25,
    color: '#6EC1E4',
    marginBottom: 100,
  },

});
