import React, { useState, useEffect } from "react";
import { Image, View, Text } from "react-native";
import { Layout } from "./layout";
import { WorkoutCard } from './WorkoutCard/container'
import { styles } from './styles'
import { connect } from 'react-redux'


function Workouts({ navigation, user }) {

    return (
        <Layout username={user.username ? user.username : "Elina"}
            ranking={user.ranking ? user.ranking : "2450"}
        />
    );
}
const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(Workouts)