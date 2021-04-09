import React from 'react';
import { Login } from './components/Login/container'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebase'
// import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Login />
    </FirebaseAppProvider>

  )
}
