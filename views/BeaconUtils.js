import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { init, startScanning, stopScanning } from 'react-native-kontaktio';

var BeaconUtils = {
  locate: function(){
    var promise = new Promise(function(resolve, reject) {

      var locations = [];
      // Initialization
      init()
      .then(() => startScanning())
      .catch(error => reject(Error(error)));

      DeviceEventEmitter.addListener(
        'beaconsDidUpdate',
        ({ beacons, region }) => {
          console.log('beaconsDidUpdate', beacons, region);

          stopScanning();

          var nearestBeacon = beacons.sort((a, b) => a.accuracy - b.accuracy).shift();

          resolve(nearestBeacon.uniqueId);

        }
      );
    });
    return promise;
  }
}

module.exports = BeaconUtils;
