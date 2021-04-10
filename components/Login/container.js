import React, { useState } from 'react';
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import { Layout } from './layout'

export function Login() {

    const firebase = useFirebaseApp();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userInputHandler = (newValue) => {
        setUsername(newValue)
    }

    const passInputHandler = (newValue) => {
        setPassword(newValue)
        console.log(password)
    }

    const submitHandler = () => {
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => console.log("logueo exitoso")
            )
            .catch((error) => console.log("hubo un error", error.code, error.message))
    }

    return (
        <Layout userInputHandler={userInputHandler} passInputHandler={passInputHandler}
            submitHandler={submitHandler} />
    );
}