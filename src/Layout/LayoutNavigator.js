import React from 'react';
import {Icon} from 'native-base'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import HomeNavigator from "./HomeScreen/HomeNavigator";

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Home') {
        iconName = 'home';
    }
    if (routeName === 'Profile') {
        iconName = 'person';
    }
    // You can return any component that you like here!
    return <Icon name={iconName} />;
};

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeNavigator },
    Profile: { screen: ProfileScreen },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

export default TabNavigator;