import React from "react"
import { Button, View } from "react-native"
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

export function Payment() {

  Stripe.setOptionsAsync({
    publishableKey: "pk_test_51Iov1mH463ReSVuZ0ZoWrohc3XnW8R1kZNQkCpU8qU5SEQw5aeFxaTf2D8hfQGz6bpuhSUod5Bltl05QkVbeNOZg00ZGxGGbXf",
    androidPayMode: 'test',
  });
  
  const makePay = async () => {
        
    const token = await Stripe.paymentRequestWithCardFormAsync();
       
    console.log(token);

    try {
      let response = await fetch(
        'http://192.168.0.26:3000/api/pay',
        {
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
          method: "POST",
          body: JSON.stringify({token: token.tokenId})
        }
      );
      let json = await response.json();
      console.log(json)
      return json;
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <View>
        <Button onPress={makePay} title="Pay"/>
      </View>
    );
  
  
    }
