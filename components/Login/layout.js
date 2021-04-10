import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import styles from './styles'

export function Layout({ userInputHandler, passInputHandler, submitHandler }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User</Text>
            <Input
                onChangeText={userInputHandler}
                placeholder='username'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Text style={styles.title}>Password</Text>
            <Input
                onChangeText={passInputHandler}
                placeholder='password'
                leftIcon={
                    <Icon
                        name='key'
                        size={24}
                        color='black'
                    />
                }
            />
            <Button
                onPress={submitHandler}
                title="Login"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text style={styles.title}>New User? Sign Up!</Text>
        </View>
    );
}