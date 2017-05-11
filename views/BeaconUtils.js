import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { init, startScanning, stopScanning } from 'react-native-kontaktio';

var BeaconUtils = {
  locate: function(){ return new Promise((resolve, reject) => {

      // Initialization
      init()
        .then(() => startScanning())
        .catch(error => reject(Error(error)));

      DeviceEventEmitter.addListener(
        'beaconsDidUpdate',
        ({ beacons, region }) => {
          // console.log('beaconsDidUpdate', beacons, region);

          stopScanning();

          var nearestBeacon = beacons.sort((a, b) => a.accuracy - b.accuracy).shift();
          var location = "";

          switch(nearestBeacon.uniqueId){
            case "5xBT":
              location = "treinstel 2830, deur 5/6";
              break;
            case "ZWWf":
              location = "treinstel 2830, deur 7/8";
              break;
            case "ugH8":
              location = "treinstel 2830, deur 9/10";
              break;
          }

          resolve(location);

        }
      );
    });
  }
}

module.exports = BeaconUtils;
