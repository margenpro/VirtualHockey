import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { Frame } from "../Frame/index";
import commonStyles from "../../assets/styles/commonStyles";
import fontStyles from "../../assets/styles/fontStyles";
import mainLogo from "../../assets/images/mainLogo.png";
import { useFirestoreDocData } from "reactfire";

export const Layout = ({ handlePayment, inputHandler }) => {
  return (
    <Frame>
      <ScrollView>
        <KeyboardAvoidingView
          style={[commonStyles.flexOne, { margin: 20 }]}
          {...(Platform.OS === "ios" && { behavior: "padding" })}
          // behavior="height"
          // keyboardVerticalOffset={0}
          enabled
        >
          <TouchableOpacity
            activeOpacity={1}
            style={commonStyles.flexOne}
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={commonStyles.flexOne, {marginBottom: 20}}>
              <Image
                style={[commonStyles.mainLogo, commonStyles.flexOne]}
                source={mainLogo}
              />
              <Text style={[fontStyles.title]}>Buy Now</Text>
            </View>
            <Text style={fontStyles.inputHeader}>NAME</Text>
            <Input
              onChange={(evt) => inputHandler("name", evt)}
              //  errorMessage={wrongEmail ? "Invalid Name" : ""}
              placeholder="John Doe"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>COUNTRY</Text>
            <Input
              onChange={(evt) => inputHandler("country", evt)}
              //  errorMessage={wrongEmail ? "Invalid Name" : ""}
              placeholder="Canada"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>CITY</Text>
            <Input
              onChange={(evt) => inputHandler("city", evt)}
              //  errorMessage={wrongEmail ? "Invalid Name" : ""}
              placeholder="Toronto"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>ADDRESS</Text>
            <Input
              onChange={(evt) => inputHandler("address", evt)}
              //  errorMessage={wrongEmail ? "Invalid Name" : ""}
              placeholder="Evergreen 714"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <View style={commonStyles.flexOne}>
              <TouchableOpacity
                onPress={handlePayment}
                style={commonStyles.actionButton}
              >
                <Text style={fontStyles.buttonText}>PAY WITH CREDIT CARD</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </Frame>
  );
};
