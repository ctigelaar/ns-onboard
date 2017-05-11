import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Overview extends Component {

    static navigationOptions = {
        title: 'NS OnBoard',
    }

    render() {

        const { navigate } = this.props.navigation;

        const buttons = [
            {title: 'Vuile coupé', route: 'Form'},
            {title: 'Voorwerp gevonden', route: 'Form'},
            {title: 'Defect aan de trein', route: 'Form'}
        ];

        return (
            <View style={styles.container}>
                <Text style={styles.intro}>Welkom aan boord van de trein naar station Zwolle. De hoofdconducteur op deze trein is Con Ducteur. Er is op deze trein catering aanwezig.</Text>
                <Text style={styles.intro}>Waarmee kan ik u van dienst zijn?</Text>
                {buttons.map((button, key) => {
                    return (
                        <View style={styles.row} key={key}>
                            <Button color="#0079d3" title={button.title} onPress={() => navigate(button.route)} />
                        </View>
                    )
                })}
                <View style={styles.row}>
                    <Text style={styles.otherIntro}>Staat uw vraag er niet tussen?.</Text>
                    <Button color="red" title="Assistentie vragen" onPress={() => navigate('FormOther')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 12
    },
    intro: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'left'
    },
    otherIntro: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'left'
    },
    row: {
        width: '100%',
        marginBottom: 12
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center'
    }

});

