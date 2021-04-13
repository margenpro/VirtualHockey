import React from "react";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
// import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Navigator from "./routes/loginStack";

export default function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Navigator />
    </FirebaseAppProvider>
  );
}
