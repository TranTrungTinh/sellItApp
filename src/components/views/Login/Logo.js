//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

// create a component
class Logo extends Component {

  state = {
    sellAnimate: new Animated.Value(0),
    itAnimate: new Animated.Value(0)
  }

  componentWillMount() {
    Animated.sequence([
      Animated.timing(this.state.sellAnimate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic
      }),
      Animated.timing(this.state.itAnimate, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic
      }),
    ]).start(() => {

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
            opacity: this.state.sellAnimate,
            top: this.state.sellAnimate.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            })
          }}
        >
          <Text style={styles.sellText}>Sell</Text>
        </Animated.View>
        <Animated.View style={{
            opacity: this.state.itAnimate
          }}
        >
          <Text style={styles.itText}>It</Text>
        </Animated.View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    maxHeight: 100
  },
  sellText: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#555555'
  },
  itText: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#00ADA9'
  }
});

//make this component available to the app
export default Logo;
