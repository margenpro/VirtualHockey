import React, { useState, useEffect } from "react";
import { Image, View } from "react-native";
import { Layout } from "./layout";

export function Video({ navigation, route }) {

    const getUrl = () => route.params.url

        return (
            <Layout
                getUrl={getUrl}
            />
        );
}

