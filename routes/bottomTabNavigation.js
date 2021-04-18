import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../components/Dashboard/container";
import { Profile } from "../components/Profile/container";

import React, { useState, useEffect } from "react";

export function BottomTab({ }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}