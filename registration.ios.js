import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar'
import Button from 'react-native-button';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  SegmentedControlIOS,
  Image,
  Switch,
  DatePickerIOS,
  Navigator,
} from 'react-native'

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 30}}
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 30}}
          placeholder="Password"
          onChangeText={(text) => this.setState({text})}
         /> 
          
      </View>
    );
  }
}

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
  },    
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});