//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { 
  getOrientation, 
  setOrientationListener, 
  removeOrientationListener 
} from '../../Utils/misc';

// import components
import Logo from './Logo';
import LoginPanel from './LoginPanel';

// create a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: getOrientation(500),
      logoAnimation: false
    }
    setOrientationListener(this.changeOrientation)
  }

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    });
  }

  showLogin = () => {
    this.setState({
      logoAnimation: true
    });
  }

  componentWillMount() {
    removeOrientationListener();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo 
            orientation={this.state.orientation}
            showLogin={this.showLogin}
          />
          <LoginPanel 
            orientation={this.state.orientation}
            show={this.state.logoAnimation}
          />
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
