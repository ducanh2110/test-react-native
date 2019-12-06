import {createStackNavigator} from "react-navigation-stack";
import LayoutNavigator from "./Layout/LayoutNavigator";
import DetailPage from "./Layout/HomeScreen/DetailPage";

const AppNavigation = createStackNavigator({
    Layout: {screen: LayoutNavigator}
}, {
    initialRouteName: 'Layout'
});

export default AppNavigation;