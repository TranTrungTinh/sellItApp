//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import LoadTabs from '../Tabs/Tabs';

// create a component
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title='Go to Home' onPress={() => LoadTabs()} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Login;
