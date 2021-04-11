import React, { useState } from 'react';
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { Text } from 'react-native';
import { Layout } from './layout'
import { SOME_KEY } from 'react-native-dotenv'


export function Login() {

    const firebase = useFirebaseApp();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongUsername, setWrongUsername] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)

    const userInputHandler = (newValue) => {
        setUsername(newValue)
        setWrongUsername(false)
    }

    const passInputHandler = (newValue) => {
        setPassword(newValue)
        setWrongUsername(false)
    }

    const submitHandler = () => {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => console.log("logueo exitoso")
            )
            .catch((error) => {
                console.log("hubo un error", error.code, error.message)
                if (error.code === "auth/user-not-found") setWrongUsername(true)
                else if (error.code === "auth/wrong-password") setWrongPassword(true)
            }
            )
    }

    return (
        <>
        {console.log(wrongUsername)}
            <Layout userInputHandler={userInputHandler} passInputHandler={passInputHandler}
                submitHandler={submitHandler} wrongUsername={wrongUsername}
                wrongPassword={wrongPassword} />
            <Text>DEBE HABER ALGO:{SOME_KEY}</Text>
        </>
    )
}