import React, { useEffect, useState } from "react";
import { Text, View, Platform, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
import Navigator from "./routes/loginStack";
import { getFont } from './fonts'


const width = Dimensions.get('window').width

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)


  useEffect(() => {
    async function loadFont() {
      await getFont()
      setfontLoaded(true)
    }
    loadFont()
  }, [])

  const color1 = "rgba(2, 28, 59, 1)"
  const color2 = "rgba(19, 38, 135, 1)"

  if (fontLoaded) {
    return (

      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <StatusBar animated={true} backgroundColor='rgba(2, 28, 59, 1)' barStyle='light-content' />
        <NavigationContainer>
          <Navigator>
          </Navigator>
        </NavigationContainer>
      </FirebaseAppProvider>
    );
  } else return null
}
