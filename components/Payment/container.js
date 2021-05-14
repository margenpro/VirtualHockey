import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from 'react-redux'



export const Payment = () => {

   const storage = getStorage();
   const firebase = useFirebaseApp();
   const storageRef = storage.ref();

   const db = firebase.firestore()

   const stripe = useStripe();
   const elements = useElements();

   const handlePayment = async () => {
  
     let clientSecret = null

         const pm = await createPaymentMethod()
    console.log("Fetcheando");
         fetch("http://192.168.56.1:3000/api/pay", {
             method: "POST",
             headers: {
               "Content-Type": "application/json"
             },
                body: JSON.stringify(pm.card)
           })
           .then(response => response.json())
           .then(data => {
            console.log("Sicreeeeeeeeeeeeeeeeeeeeeet");
            console.log(data)
            payWithCard(stripe, pm.card, data.clientSecret)
           })

         
       

      
     };

     const createPaymentMethod = async () => {
        
       if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
         return;
       }
  
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
       const cardElement = elements.getElement(CardElement);
  
        // Use your card Element with other Stripe.js APIs
       const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
         card: cardElement,
       });
       console.log("TARJETAAAAAAAAAAAAAAA");
       console.log(paymentMethod.card)
  
       if (error) {
         console.log('[error]', error);
       } else {
         console.log('[PaymentMethod]', paymentMethod);
         return paymentMethod
       }
     }

     const payWithCard = function(stripe, card, clientSecret) {
         stripe
           .confirmCardPayment(clientSecret, {
             payment_method: {
               card: card
             }
           })
           .then(function(result) {
             if (result.error) {
                // Show error to your customer
               console.log(result.error.message);
             } else {
                // The payment succeeded!
               orderComplete(result.paymentIntent.id);
             }
           });
       };
       
    

  return (
      <Layout
         handlePayment={handlePayment}
      />
  );
}







