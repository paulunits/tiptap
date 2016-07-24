import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight
} from 'react-native';

class Search extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
      // passProps: {name: routeName},
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>

        <View style={styles.nav}>
        <TouchableHighlight underlayColor={'transparent'}
         onPress={()=>{this.props.navigator.pop()}}
        >
          <Text style={styles.bButton}>  &lsaquo; </Text>
        </TouchableHighlight>

          </View>
          </View>
          <Text style={styles.title}>
            Searching!
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#B8D8D8',
    marginTop: 24,
  },
  title: {
    marginTop: 250,
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  bButton: {
    backgroundColor: '#007399',
    color: 'white',
    // padding: 3,
    textAlign: 'left',
    marginTop: 0,
    fontSize: 40,
    width: 55,
    // paddingBottom: 10,
    fontWeight: 'bold',
  },
  nav: {
    justifyContent: 'flex-start',
    width: 378,
    height: 50,
    backgroundColor: '#007399',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  navtitle: {
    fontFamily: 'Helvetica',
    marginTop: 15,
    marginLeft: 74,
    fontSize: 20,
    color: 'white',
    letterSpacing: 14,
  },
    title: {
    marginTop: 250,
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  bButton: {
    backgroundColor: '#007399',
    color: 'white',
    // padding: 3,
    textAlign: 'left',
    marginTop: 0,
    fontSize: 40,
    width: 55,
    // paddingBottom: 10,
    fontWeight: 'bold',
  },
  nav: {
    justifyContent: 'flex-start',
    width: 378,
    height: 50,
    backgroundColor: '#007399',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  navtitle: {
    fontFamily: 'Helvetica',
    marginTop: 15,
    marginLeft: 74,
    fontSize: 20,
    color: 'white',
    letterSpacing: 14,
  },
});

export default Search;
