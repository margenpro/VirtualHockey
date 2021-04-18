import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from "../components/Dashboard/container";
import { Profile } from "../components/Profile/container";
import { Leaderboard } from "../components/Leaderboard/container";

export function BottomTab({ }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
        </Tab.Navigator>
    );
}