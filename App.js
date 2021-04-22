import React, { useEffect, useState } from "react";
import { Text, View, Platform, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
import Navigator from "./routes/loginStack";
import { getFont } from './fonts'
import { Context } from './context/userContext'

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await getFont()
      setfontLoaded(true)
    }
    loadFont()
  }, [])

  if (fontLoaded) {
    return (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <StatusBar animated={true} backgroundColor='rgba(2, 28, 59, 1)' barStyle='light-content' />
        <Context>
          <NavigationContainer>
            <Navigator>
            </Navigator>
          </NavigationContainer>
        </Context>
      </FirebaseAppProvider>
    );
  } else return null
}
