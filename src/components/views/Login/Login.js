//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Logo from './Logo';

// create a component
class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo />
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Login;
