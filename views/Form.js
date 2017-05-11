import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class Splash extends Component {

    static navigationOptions = {
        title: 'Vul het formulier in'
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hier komt het formulier
                </Text>
                <Button
                    onPress={() => navigate('Overview')}
                    title="Terug"
                    color="#841584"
                    accessibilityLabel="Deze"
                />
            </View>
        );
    }
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





