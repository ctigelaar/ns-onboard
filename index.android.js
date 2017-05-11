/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ToolbarAndroid,
  Text,
  View
} from 'react-native';

import nativeImageSource from 'nativeImageSource';

export default class NSOnBoard extends Component {
  render() {
          return (
              <ToolbarAndroid
                  actions={toolbarActions}
                  logo={require("./assets/images/nslogo.png")}
                  style={styles.toolbar}
              />
          );
      }
}
var toolbarActions = [
    {title: 'Create', icon: nativeImageSource({
        android: 'ic_create_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: nativeImageSource({
        android: 'ic_settings_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'},
];

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#ffc917',
        height: 56,
        alignSelf: 'stretch'
    },
});

AppRegistry.registerComponent('NSOnBoard', () => NSOnBoard);
