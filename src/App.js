/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";

const SwitchNavigator = createSwitchNavigator({
    Auth: AuthNavigation,
    App: AppNavigation
});
const App = createAppContainer(SwitchNavigator);

export default App;
