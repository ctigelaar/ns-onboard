/**
 * NS OnBoard
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import Dummy from './views/Dummy';

export default class NSOnBoard extends Component {
    render() {
        return (
            <Dummy />
        );
    }
};

AppRegistry.registerComponent('NSOnBoard', () => NSOnBoard);
