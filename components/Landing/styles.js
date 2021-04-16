
import { StyleSheet } from "react-native";




export default StyleSheet.create({
    
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },



    containerImagenTitulo: {
      margin:35,
      marginTop:10,
      marginBottom: 0,
      justifyContent: 'flex-start',
      
    },
    
    imagenTitulo: {
      width: 350,
      height: 100,
      resizeMode: 'contain',
      
    },
    containerTextoInicial :{
      
      alignItems: 'center',
      marginBottom: 20,

    },


    celeste:{
      fontSize: 25,
      color:  '#00AEEF',

    },


    blanco: {
      fontSize: 25,
      color: '#fff',
    },
    
    containerImagenVideo :{
        margin : 10,
        
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
      marginTop: 20,
      marginBottom:40,
      
  
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
      marginBottom: 25
      ,maxWidth: 550
      ,paddingHorizontal: 20
      

    },

  
    
    
  
    
  });
  