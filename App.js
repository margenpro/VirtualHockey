import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
// import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Navigator from "./routes/loginStack";
import { getFont } from './fonts'

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
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </FirebaseAppProvider>
    );
  } else return null
}
