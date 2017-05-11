import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button,
    Image
} from 'react-native';

export default class Splash extends Component {

   static navigationOptions = {
        header: null
   }

    render() {

        const { navigate } = this.props.navigation;

        return (
        <Image source={require('../assets/images/reisplannerxtra.png')} style={styles.backgroundImage} resizeMode={Image.resizeMode.sretch} >
            <View style={styles.welcome}>

                <Button
                    onPress={() => navigate('Overview')}
                    title="NS OnBoard Demo"
                    color="green"
                    accessibilityLabel="Deze"
                />

                <Button
                    onPress={() => navigate('Thankyou')}
                    title="Bedanktpagina"
                    color="red"
                    accessibilityLabel="Deze"
                />
            </View>
         </Image>
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
        margin: 12,
        marginTop: 500
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    }
});





