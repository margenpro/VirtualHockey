import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://virtualhockey.com/wp-content/uploads/2021/01/vh_favicodark.png',
        }}      />
      <Text style={styles.title}>This is Virtual Hockey!</Text>
      <Button
        title="LOGIN"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
  logo: {
    width: 66,
    height: 58,
  }
});
