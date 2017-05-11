import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Alert,
    Button
} from 'react-native';

export default class Dummy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hier komt een screenshot
                </Text>
                <Button
                    onPress={onPressGoToOverview}
                    title="Diensten aan boord"
                    color="#841584"
                    accessibilityLabel="Deze"
                />
            </View>
        );
    }
};

const onPressGoToOverview = () => {
    Alert.alert('Button has been pressed!');
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});





