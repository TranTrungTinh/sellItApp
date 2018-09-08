//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text } from 'react-native';

// create a component
class LoginPanel extends Component {

  state = {
    animateFinished: false,
    backImage: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show && !this.state.animateFinished) {
      Animated.parallel([
        Animated.timing(this.state.backImage, {
          toVuale: 1,
          duration: 1000
        }),
        Animated.timing(this.state.inputForm, {
          toVuale: 1,
          duration: 1500
        })
      ]).start(() => {
        this.setState({ animateFinished: true });
      })
    }
  }

  render() {
    return (
      <View>
        <Animated.View style={{
          opacity: this.state.backImage
        }}>
          <Image 
            source={require('../../../assets/images/logo.png')}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        </Animated.View>
        <Animated.View style={{
          opacity: this.state.inputForm,
          top: this.state.inputForm.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 30]
          })
        }}>
          <Text>Form</Text>
        </Animated.View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  imageStyle: {
    width: 270,
    height: 150
  },
});

//make this component available to the app
export default LoginPanel;
