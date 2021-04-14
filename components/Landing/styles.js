import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flex: 1,
        //backgroundColor: '#021C3B',
        margin: 0,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImagenTitulo: {
      margin:35,
      marginTop: 0,
      marginBottom: 0,
      justifyContent: 'flex-start',
      
    },
    
    imagenTitulo: {
      width: 350,
      height: 100,
      resizeMode: 'contain',
      
    },
    containerTextoInicial :{
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    },
    train:{
      fontSize: 25,
      color:  '#00AEEF',
      right: 70
    },
    anywhere: {
      fontSize: 25,
      color: '#fff',
      left: 10,
      position: 'absolute'
    },
    
    improve:{
      fontSize: 25,
      color:  '#00AEEF',
      right: 85
    },
    everywhere: {
      fontSize: 25,
      color: '#fff',
      left: 30,
      position: 'absolute'
      
    },
    containerImagenVideo :{
        margin : 10,
        marginBottom: 20
    },
    imagenVideo:{
        width: 350,
        height: 200,
        borderRadius: 15
        
    },
    boton:{
      backgroundColor: '#00AEEF',
      padding: 10,
      borderRadius: 10,
      width: 320,
    
      marginBottom:40
  
    },
    textoBoton:{
      color: '#fff',
      textAlign:'center',
      fontSize: 25
    },
    textoChico:{
      color:'#00AEEF',
      fontSize: 20,
      marginBottom: 25
    },


    textoInfo:{
        fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      width: 320,
      //position: 'relative'
      marginBottom: 25
  
    },
    boton2:{
      backgroundColor: '#BD0938',
      padding: 10,
      borderRadius: 10,
      width: 320,
    
      marginBottom:40
  
    },
    
    
  
    
  });
  