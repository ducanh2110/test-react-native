import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import DetailPage from "./DetailPage";

const HomeNavigator = createStackNavigator({
    HomePage: {screen: HomeScreen},
    DetailPage: {screen: DetailPage},
}, {
    headerMode: 'none',
    mode: "modal",
    initialRouteName: 'HomePage'
});

export default HomeNavigator;