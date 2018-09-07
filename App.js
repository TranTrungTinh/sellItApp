import { Navigation } from 'react-native-navigation';

import Home from './src/components/Home/Home';

Navigation.registerComponent('sellitapp.Home', () => Home);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitapp.Home', 
    title: 'Home'
  }
});
