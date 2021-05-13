import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Frame } from '../Frame'
import mainLogo from '../../assets/images/mainLogo.png'
import fontStyles from '../../assets/styles/fontStyles'
import commonStyles from '../../assets/styles/commonStyles'
import { WebView } from "react-native-webview"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

export function Layout({ handlePayment }) {

    const stripe = useStripe();
    const elements = useElements();

  return (
   
      <View>
      <CardElement />
      <TouchableOpacity disabled={!stripe} onPress={handlePayment}>
        <Text>Pay</Text>
      </TouchableOpacity>
      </View>
   
  );
}
