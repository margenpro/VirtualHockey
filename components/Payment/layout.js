import {CardField} from "@stripe/stripe-react-native"
import React from "react"
import { Button, View } from "react-native"

export function Payment() {

    const fetchPaymentIntentClientSecret = async () => {
      const response = await fetch(`${API_URL}/apy/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: 'usd',
        }),
      });
      const {clientSecret} = await response.json();
  
      return clientSecret;
    };
  
    const handlePayPress = async () => {
      if (!card) {
        return;
      }
  
      // Fetch the intent client secret from the backend
      const clientSecret = await fetchPaymentIntentClientSecret();
    };
  
    return (
      <View>
        <CardField onCardChange={(cardDetails) => setCard(cardDetails)} />
  
        <Button onPress={handlePayPress} title="Pay"/>
      </View>
    );
  
  

}