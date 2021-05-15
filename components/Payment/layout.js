import React from "react"
import { Button, View } from "react-native"

export const Layout = ({ handlePayment }) => {
    return (
      <View>
        <Button onPress={handlePayment} title="Pay"/>
      </View>
    );
  
      
}
