import React from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

export const Payment = () => {

  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore()
  
  Stripe.setOptionsAsync({
    publishableKey: "pk_test_51Iov1mH463ReSVuZ0ZoWrohc3XnW8R1kZNQkCpU8qU5SEQw5aeFxaTf2D8hfQGz6bpuhSUod5Bltl05QkVbeNOZg00ZGxGGbXf",
    androidPayMode: 'test',
  });
  
  const handlePayment = async () => {
        
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
      
      let res = await response.json();
      console.log(res)
    } catch (error) {
      // Alert.alert(
      //   "Oops!",
      //   `An error has occurred: ${error.message}`
      // )
    }
  };






  return (
      <Layout
         handlePayment={handlePayment}
      />
  );
}







