import React, { useState } from "react";
import "firebase/auth";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import { connect } from "react-redux";
import { setterUserAction } from "../../redux/actions/userActions";
import { Alert } from "react-native";

const Payment = ({ user, navigation, setUser }) => {
  const [userData, setUserData] = useState({
    name: "",
    city: "",
    country: "",
    address: "",
  });

  const [formCompleteMessage, setFormCompleteMessage] = useState(false);
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();

  const inputHandler = (title, evt) => {
    setUserData({
      ...userData,
      [title]: evt,
    });
    setFormCompleteMessage(false);
  };

  const validateForm = () => {
    for (let key in userData) if (userData[key] === "") return false;
    return true;
  };

  Stripe.setOptionsAsync({
    publishableKey:
      "pk_test_51Iov1mH463ReSVuZ0ZoWrohc3XnW8R1kZNQkCpU8qU5SEQw5aeFxaTf2D8hfQGz6bpuhSUod5Bltl05QkVbeNOZg00ZGxGGbXf",
    androidPayMode: "test",
  });

  const handlePayment = async () => {
    if (!validateForm()) {
      setFormCompleteMessage(true);
      return null;
    }
    const token = await Stripe.paymentRequestWithCardFormAsync();
    try {
      let response = await fetch(
        "https://us-central1-virtualhockey.cloudfunctions.net/app/api/pay",
        // "http://192.168.0.26:3000/api/pay",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ token: token.tokenId }),
        }
      );

      let res = await response.json();

      if (res.status === "succeeded") {
        const paymentDate = new Date().toUTCString();
        await makeMember(paymentDate);
        setUser({ role: 2, paymentDate: paymentDate });
        navigation.navigate("BottomTab");
      }
    } catch (error) {
      Alert.alert(
        "Oops!",
        `An error has occurred! Please try again or contact administrator :(`
      );
    }
  };

  const makeMember = async (date) => {
    await db.collection("users").doc(user.id).update({
      role: 2,
      paymentDate: date,
    });
  };

  return (
    <Layout
      handlePayment={handlePayment}
      inputHandler={inputHandler}
      userData={userData}
      formCompleteMessage={formCompleteMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const actionCreators = {
  setUser: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(Payment);
