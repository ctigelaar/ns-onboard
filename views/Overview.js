import React, { Component } from 'react';

import Header from './components/Header';

export default class Overview extends Component {

    static navigationOptions = {
        title: 'NS OnBoard',
    }

    render() {
        return (
            <Header />
        );
    }
}

