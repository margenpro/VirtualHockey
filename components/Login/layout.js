import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

export function Layout({ userInputHandler, passInputHandler, submitHandler, 
    wrongUsername, wrongPassword }) {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.container} colors={['rgba(2, 28, 59, 1)', 'rgba(19, 38, 135, 1)']}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.title}>USERNAME</Text>
                <Input
                    onChangeText={userInputHandler}
                    placeholder='username'
                    style={styles.input}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='white'
                        />
                    }
                />
                <Text style={styles.title}>PASSWORD</Text>
                <Input
                    onChangeText={passInputHandler}
                    placeholder='password'
                    secureTextEntry
                    style={styles.input}
                    leftIcon={
                        <Icon
                            name='key'
                            size={24}
                            color='white'
                        />
                    }
                />
                <TouchableOpacity
                    onPress={submitHandler}
                    accessibilityLabel="Learn more about this purple button"
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>New User? Sign Up!</Text>
            </LinearGradient>

        </View>
    );
}