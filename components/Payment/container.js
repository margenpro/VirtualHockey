import React from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
import { connect } from 'react-redux'
import { setterUserAction } from '../../redux/actions/userActions'
import { setVideosAction } from '../../redux/actions/videosActions'


const Payment = ({ user, navigation }) => {

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
       
    try {
      let response = await fetch(
        // 'https://us-central1-virtualhockey.cloudfunctions.net/app/api/pay',
        "http://192.168.0.26:3000/api/pay", 
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
      
      if (res.status === "succeeded") {
        await makeMember();
        console.log(user);
        navigation.navigate("BottomTab")
      }

    } catch (error) {
      // Alert.alert(
      //   "Oops!",
      //   `An error has occurred: ${error.message}`
      // )
    }
  };

  const makeMember = async() => {
    console.log(user);
    await db.collection("users")
      .doc(user.id)
      .update({
        "role": 2
      })
  }

  return (
      <Layout
         handlePayment={handlePayment}
      />
  );

}

const mapStateToProps = state => {
  return{ 
    user: state.userReducer.user,
   videos: state.videosReducer.videos
  }
 }

 const actionCreators = {
  setUser: setterUserAction,
  setVideos: setVideosAction
}

 export default connect(mapStateToProps, actionCreators)(Payment)
