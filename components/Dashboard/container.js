import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { Layout } from "./layout";
import profileImage from '../../assets/images/user.jpg'


export function Dashboard({ navigation }) {

    const getProfileImage = () => {
        return profileImage
    }

    return (
        <Layout
        getProfileImage={getProfileImage}
        />
    );
}
