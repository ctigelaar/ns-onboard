import React, { Component } from 'react';

import Header from './components/Header';

import { ScrollView, View, StyleSheet, Text, TouchableOpacity, DeviceEventEmitter } from 'react-native';

import
{
  init,
  disconnect,
  isConnected,
  startScanning,
  stopScanning,
  restartScanning,
  isScanning
} from 'react-native-kontaktio';

export default class BeaconTest extends Component {
    state = {
      scanning: false,
      beacons: [],
      statusText: null,
    };

    componentDidMount() {
      // Initialization, configuration and adding of beacon regions
      init()
      .catch(error => console.log('error', error));

      // Beacon listeners
       DeviceEventEmitter.addListener(
         'beaconDidAppear',
         ({ beacon: newBeacon, region }) => {
           console.log('beaconDidAppear', newBeacon, region);

           this.setState({
             beacons: this.state.beacons.concat(newBeacon)
           });
         }
       );
       DeviceEventEmitter.addListener(
         'beaconDidDisappear',
         ({ beacon: lostBeacon, region }) => {
           console.log('beaconDidDisappear', lostBeacon, region);

           const { beacons } = this.state;
           const index = beacons.findIndex(beacon =>
             this._isIdenticalBeacon(lostBeacon, beacon)
           );
           this.setState({
             beacons: beacons.reduce((result, val, ind) => {
               // don't add disappeared beacon to array
               if (ind === index) return result;
               // add all other beacons to array
               else {
                 result.push(val);
                 return result;
               }
             }, [])
           });
         }
       );
       DeviceEventEmitter.addListener(
         'beaconsDidUpdate',
         ({ beacons: updatedBeacons, region }) => {
           console.log('beaconsDidUpdate', updatedBeacons, region);

           const { beacons } = this.state;
           updatedBeacons.forEach(updatedBeacon => {
             const index = beacons.findIndex(beacon =>
               this._isIdenticalBeacon(updatedBeacon, beacon)
             );
             this.setState({
               beacons: beacons.reduce((result, val, ind) => {
                 // replace current beacon values for updatedBeacon, keep current value for others
                 ind === index ? result.push(updatedBeacon) : result.push(val);
                 return result;
               }, [])
             })
           });
         }
       );

       // Beacon monitoring listener
      DeviceEventEmitter.addListener(
        'monitoringCycle',
        ({ status }) => {
          console.log('monitoringCycle', status);
        }
      );
    }

    componentWillUnmount() {
      // Disconnect beaconManager and set to it to null
      disconnect();
    }

  _startScanning = () => {
    startScanning()
      .then(() => this.setState({ scanning: true, statusText: null }))
      .then(() => console.log('started scanning'))
      .catch(error => console.log('[startScanning]', error));
  };
  _stopScanning = () => {
    stopScanning()
      .then(() => this.setState({ scanning: false, beacons: [], statusText: null }))
      .then(() => console.log('stopped scanning'))
      .catch(error => console.log('[stopScanning]', error));
  };
  _restartScanning = () => {
    restartScanning()
      .then(() => this.setState({ scanning: true, beacons: [], statusText: null }))
      .then(() => console.log('restarted scanning'))
      .catch(error => console.log('[restartScanning]', error));
  };
  _isScanning = () => {
    isScanning()
      .then(result => {
        this.setState({ statusText: `Device is currently ${result ? '' : 'NOT '}scanning.` });
        console.log('Is device scanning?', result);
      })
      .catch(error => console.log('[isScanning]', error));
  };
  _isConnected = () => {
    isConnected()
      .then(result => {
        this.setState({ statusText: `Device is ${result ? '' : 'NOT '}ready to scan beacons.` });
        console.log('Is device connected?', result);
      })
      .catch(error => console.log('[isConnected]', error));
  };

  /**
   * Helper function used to identify equal beacons
   */
  _isIdenticalBeacon = (b1, b2) => (
    (b1.identifier === b2.identifier) &&
    (b1.uuid === b2.uuid) &&
    (b1.major === b2.major) &&
    (b1.minor === b2.minor)
  );

  _renderBeacons = () => {
    const colors = ['#F7C376', '#EFF7B7', '#F4CDED', '#A2C8F9', '#AAF7AF'];

    return this.state.beacons.sort((a, b) => a.accuracy - b.accuracy).map((beacon, ind) => (
      <View key={ind} style={[styles.beacon, {backgroundColor: colors[beacon.minor - 1]}]}>
        <Text style={{fontWeight: 'bold'}}>{beacon.uniqueId}</Text>
        <Text>Major: {beacon.major}, Minor: {beacon.minor}</Text>
        <Text>Distance: {beacon.accuracy}, Proximity: {beacon.proximity}</Text>
        <Text>Battery Power: {beacon.batteryPower}, TxPower: {beacon.txPower}</Text>
        <Text>FirmwareVersion: {beacon.firmwareVersion}, Address: {beacon.uniqueId}</Text>
      </View>
    ), this);
  };

  _renderEmpty = () => {
    const { scanning, beacons } = this.state;
    let text;
    if (!scanning) text = "Start scanning to listen for beacon signals!";
    if (scanning && !beacons.length) text = "No beacons detected yet...";
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  _renderStatusText = () => {
    const { statusText } = this.state;
    return statusText ? (
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: 'red' }]}>{statusText}</Text>
      </View>
    ) : null;
  };

  _renderButton = (text, onPress, backgroundColor) => (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

    render() {
        const { scanning, beacons, statusText } = this.state;
        
        return (
            <View style={styles.container}>
              <Header />
              <View style={styles.buttonContainer}>
                {this._renderButton('Start scan', this._startScanning, '#84e2f9')}
                {this._renderButton('Stop scan', this._startScanning, '#84e2f9')}
                {this._renderButton('Restart scan', this._startScanning, '#84e2f9')}
              </View>
              <View style={styles.buttonContainer}>
                {this._renderButton('Is scanning?', this._isScanning, '#f2a2a2')}
                {this._renderButton('Is connected?', this._isConnected, '#f2a2a2')}
              </View>
              {this._renderStatusText()}
              <ScrollView>
                {scanning && beacons.length ? this._renderBeacons() : this._renderEmpty()}
              </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  beacon: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
});
