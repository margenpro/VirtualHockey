import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage } from '../../firebase'
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";

export function Login({ navigation }) {

    const storage = getStorage()
    const firebase = useFirebaseApp()
    const storageRef = storage.ref()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [wrongUsername, setWrongUsername] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [logoUrl, setLogoUrl] = useState()

    useEffect(() => {
        storageRef.child('images/vh_favico[3].png').getDownloadURL()
            .then((resolve) => {
                setLogoUrl(resolve)
            }
            )
            .catch((e) => console.log(e.code, e.message))
    }, [])

    // SF Direccionar a la screen Register
    const screenHandler = () => {
        navigation.navigate("Register");
    };

    const userInputHandler = newValue => {
        setUsername(newValue);
        setWrongUsername(false);
    };

    const passInputHandler = newValue => {
        setPassword(newValue);
        setWrongUsername(false);
    };

    const submitHandler = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then(() => console.log("logueo exitoso"))
            .catch(error => {
                console.log("hubo un error", error.code, error.message);
                if (error.code === "auth/user-not-found") setWrongUsername(true);
                else if (error.code === "auth/wrong-password") setWrongPassword(true);
            });
    };

    return (
        <>
            <Layout
                userInputHandler={userInputHandler}
                passInputHandler={passInputHandler}
                submitHandler={submitHandler}
                wrongUsername={wrongUsername}
                screenHandler={screenHandler}
                wrongPassword={wrongPassword}
                logoUrl={logoUrl}
            />
            {console.log(logoUrl)}
        </>
    );
}
