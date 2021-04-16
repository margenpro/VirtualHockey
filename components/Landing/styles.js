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
  },
  imagenTitulo: {
    flex: 1,
    width: width*.8,
    height: 80,
    resizeMode: 'contain'
  },
  containerTextoInicial: {
    alignItems: 'center',
    marginBottom: 20,
  },
  celeste: {
    fontSize: 25,
    color: '#00AEEF',
  },
  blanco: {
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
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,

  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  textoChico: {
    color: '#00AEEF',
    fontSize: 20,
    marginBottom: 25
  },

  textoInfo: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 20
  },
  scroll: {
    flex: 1,
  }
});
