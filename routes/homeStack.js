import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Login } from "../components/Login/container";
//import { Register } from "../components/Register/container";

const screens = {
  Login: {
    screen: Login
  }
  //   Register: {
  //     screen: Register
  //   }
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
