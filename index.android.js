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

const App = StackNavigator({
    Splash: {screen: Splash},
    Overview: {screen: Overview}
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

// export default class NSOnBoard extends Component {
//     render() {
//         return (
//             <Navigator
//                 initialRoute={{id: 'Splash', name: 'Index'}}
//                 renderScene={this.renderScene.bind(this)}
//                 configureScene={(route) => {
//                     if (route.sceneConfig) {
//                         return route.sceneConfig;
//                     }
//                     return Navigator.SceneConfigs.FloatFromRight;
//                 }} />
//         );
//     }
// };

AppRegistry.registerComponent('NSOnBoard', () => App);
