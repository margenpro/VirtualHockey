import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  
  containerImagenTitulo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-start',
    height: 80,
  },

  imagenTitulo: {
    flex: 1,
    width: width*.8,
    height: 300,
    resizeMode: 'contain'
  },
    
  containerTextoInicial: {
    alignItems: 'center',
    marginBottom: 20,
  },
  celeste: {
    fontFamily:"comfortaa",
    fontSize: 25,
    color: '#00AEEF',
  },
  blanco: {
    fontFamily:"comfortaa",
    fontSize: 25,
    color: '#fff',
  },
  containerImagenVideo: {
    margin: 10,
  },
  imagenVideo: {
    width: width*.8,
    height: 200,
    borderRadius: 15
  },
  boton: {
    width: width*.8,
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  textoBoton: {
    fontFamily:"comfortaa",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600"
  },
  textoChico: {
    fontFamily:"comfortaa",
    color: '#00AEEF',
    fontSize: 20,
    marginBottom: 25
  },
  textoInfo: {
    fontFamily:"comfortaa",
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 20
  },
  scroll: {
    flex: 1,
  },


  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  videoImage:{
    flex: 10,
    width: width,
    resizeMode: 'contain',
    marginVertical: 15,
    //alignItems: "center"
    //marginBottom: 95,
  },

  videoTitle:{
    flex: 2, 
    color:'#fff',
    fontSize: 22,
    textAlign: "center" ,
    fontWeight: 'bold'
  },

  videoInfo:{
    flex: 4, 
    color:'#fff',
    fontSize: 17,
    textAlign:"justify",
    paddingHorizontal: 15,
    
  }


});
