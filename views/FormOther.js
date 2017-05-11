import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
    Alert
} from 'react-native';

export default class FormOther extends Component {

    static navigationOptions = {
        title: 'Assistentie vragen'
    }

    constructor(props) {
        super(props);
        this.state = {
            subject: ''
        };
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.intro}>
                    Vul het onderstaande formulier volledig in en klik op versturen. De hoofdconducteur neemt uw verzoek in behandeling en zal z.s.m. terugkoppeling geven.
                </Text>
                <View style={styles.formRow}>
                    <Text style={styles.label}>Onderwerp</Text>
                    <TextInput
                        style={styles.inputDefault}
                        onChangeText={(text) => this.setState({subject: text})}
                        value={this.state.subject}
                        underlineColorAndroid="#0079d3"
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => onSubmit(this.state.subject)}
                        title="Versturen"
                        color="#0079d3"
                        accessibilityLabel="Deze"
                    />
                </View>
            </View>
        );
    }
};

const onSubmit = (subject) => {
    Alert.alert('Verzonden waarde: ' + subject);
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    intro: {
        fontSize: 20,
        marginBottom: 20
    },
    label: {
        marginBottom: 8
    },
    formRow: {
        marginBottom: 20,
    },
    inputDefault: {
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 10,
    },
});






