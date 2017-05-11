/**
 * NS OnBoard
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splash from './views/Splash';
import Overview from './views/Overview';
import Form from './views/Form';

const App = StackNavigator({
    Splash: {screen: Splash},
    Overview: {screen: Overview},
    Form: {screen: Form}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#ffc917',
        },
        headerTitleStyle: {
            color: '#003082'
        },
        headerBackTitleStyle: {
            color: '#003082',
            backgroundColor: '#003082'
        }
    }
});

AppRegistry.registerComponent('NSOnBoard', () => App);
