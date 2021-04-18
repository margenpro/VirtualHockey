import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
// import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Navigator from "./routes/loginStack";
import { getFont } from './fonts'

export default function App() {
  getFont()
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </FirebaseAppProvider>
  );
}
