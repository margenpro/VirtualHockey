import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Login } from "../components/Login/container";
import { Register } from "../components/Register/container";
import { Landing } from "../components/Landing/container";

const screens = {
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Landing: {
    screen: Landing
  }
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: null
  }
});
export default createAppContainer(LoginStack);
