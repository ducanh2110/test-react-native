import {createStackNavigator} from "react-navigation-stack";
import FlatListDemo from "../FlatListDemo";

const AuthNavigation = createStackNavigator({
    Login: {screen: FlatListDemo}
}, {initialRouteName: 'Login'});

export default AuthNavigation