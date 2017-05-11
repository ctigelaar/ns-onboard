import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

import { locate } from './BeaconUtils';

export default class Form extends Component {

    constructor(){
      super();
      this.state = {
        location: "Onbekend"
      }
    }

    static navigationOptions = {
        title: 'Vul het formulier in'
    }

    componentDidMount() {
      locate()
        .then(result => this.setState({ location: result }) )
    }

    render() {

        const { navigate } = this.props.navigation;
        const { location } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hier komt het formulier. U zit nu: {location}
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
