import { Button } from 'native-base';
import NavigationBar from 'react-native-navbar'
import {
  AppRegistry, StyleSheet, Text, View, SegmentedControlIOS, TouchableHighlight,
  Image, Switch, ScrollView, DatePickerIOS, Navigator, AlertIOS,
} from 'react-native'
import React, { Component } from 'react';
import Error from './error'
import Registration from './registration'
import Active from './active'
import BeaconBroadcast from 'beaconbroadcast';
import Beacons from 'react-native-ibeacon';
import { DeviceEventEmitter } from 'react-native';

var region = {
    identifier: 'TipTap',
    uuid: 'c617d2c3-25a7-45d3-96c5-51a9e3731862'
};

Beacons.requestWhenInUseAuthorization();
Beacons.startMonitoringForRegion(region);
Beacons.startRangingBeaconsInRegion(region);
Beacons.startUpdatingLocation();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'No users are in your area',
      lastName: '',
      photoUrl: 'http://i.imgur.com/CGB5Uv9.png',
      paymentUrl: ''
    }
  }

  componentWillMount () {
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        fetch("https://tiptap-api.herokuapp.com/tippees/" + data.beacons[0].minor, {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({firstName: responseData.first_name})
          this.setState({lastName: responseData.last_name})
          this.setState({paymentUrl: responseData.payment_url})
          this.setState({photoUrl: responseData.photo_url})
        })
        .done();
      }
    )
  }

  activate(){
    BeaconBroadcast.startAdvertisingBeaconWithString('b075ec89-2d25-4e38-8182-d5a07cea17a0', 'ben')
  }

  deactivate(){
    BeaconBroadcast.stopAdvertisingBeacon()
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
      <ScrollView>
        <NavigationBar
            title={{ title:  'TipTap!' , tintColor:  'black' , }}
            rightButton={{ title: 'Get Tips', tintColor: 'black', handler: this.navigate.bind(this, "search")}}
            leftButton={{ title: 'Register', tintColor: 'black', handler: this.navigate.bind(this, "registration")} }
            style={{ backgroundColor:  "#D3D3D3" , }}
            statusBar={{ tintColor:  "white", hideAnimation: 'none' }}
        />

        <View style={styles.container}>
          
          <Text style={styles.welcome}>
            {this.state.firstName} {this.state.lastName}
          </Text>

          <Image
            style={{
              width:  300 ,
              height:  200 ,
            }}
            resizeMode={ "contain" }
            source={{uri:this.state.photoUrl}}
            />
        </View>

        <Text>{'\n'}</Text>

        <Button success block
          onPress={() => (AlertIOS.alert(
            "You tipped $1",
            "Thanks!"))}>
          $1
        </Button>

        <Button success block
          onPress={() => (AlertIOS.alert(
            "You tipped $5",
            "Thanks!"))}>
          $5
        </Button>

        <Button success block
          onPress={() => (AlertIOS.alert(
            "You tipped $10",
            "Thanks!"))}>
          $10
        </Button>

        <Button large bordered success block
          onPress={() => this.activate()}>
          Activate
        </Button>
        
        <Button large bordered success block
          onPress={() => this.deactivate()}>
          Deactivate
        </Button>
        
        <Text>{'\n'}{'\n'}</Text>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width:  150 ,
    height:  100 ,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main