import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../components/Login/container";
import { Register } from "../components/Register/container";
import { Landing } from "../components/Landing/container";
import { Dashboard } from "../components/Dashboard/container";
import { BottomTab } from './bottomTabNavigation'
import {Payment} from "../components/Payment/container"

const screens = {
  // Payment: {
  //   screen: Payment,
  // },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Landing: {
    screen: Landing,
  },
  BottomTab: {
    screen: BottomTab,
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: null,
  },
});
export default createAppContainer(LoginStack);
