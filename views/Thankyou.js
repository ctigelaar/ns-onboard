import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class Splash extends Component {

    static navigationOptions = {
        title: 'Bedankt',
    }

    render() {

        const { navigate } = this.props.navigation;

        return (

        <View style={styles.container}>
            <Text style={styles.intro}>Bedankt voor uw melding. Deze is doorgestuurd naar de hoofdconducteur.</Text>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 12
    },
    intro: {
        fontSize: 26,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center'
    },
});





