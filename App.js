import React, { useEffect, useState } from "react";
import stripe from "@agaweb/react-native-stripe";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
import Navigator from "./routes/loginStack";
import { getFont } from './fonts'
// import { Context } from './context/userContext'
import storeFn from './redux/store'
import { Provider } from 'react-redux'

stripe.initModule("pk_test_51Iov1mH463ReSVuZ0ZoWrohc3XnW8R1kZNQkCpU8qU5SEQw5aeFxaTf2D8hfQGz6bpuhSUod5Bltl05QkVbeNOZg00ZGxGGbXf")

export default function App() {
  const store = storeFn()
  const [fontLoaded, setfontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await getFont()
      setfontLoaded(true)
    }
    loadFont()
  }, [])

  if (fontLoaded) {
    return (
      <Provider store={store}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <StatusBar animated={true} backgroundColor='rgba(2, 28, 59, 1)' barStyle='light-content' />
          {/* <Context> */}
            <NavigationContainer>
              <Navigator>
              </Navigator>
            </NavigationContainer>
          {/* </Context> */}
        </FirebaseAppProvider>
      </Provider>
    );
  } else return null
}
