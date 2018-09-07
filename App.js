import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './src/components/Store/config';

import Home from './src/components/views/Home/Home';
import Login from './src/components/views/Login/Login';
import AddPost from './src/components/views/AddPost/AddPost';

Navigation.registerComponent('sellitapp.Home', () => Home, store, Provider);
Navigation.registerComponent('sellitapp.Login', () => Login, store, Provider);
Navigation.registerComponent('sellitapp.AddPost', () => AddPost, store, Provider);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitapp.Login', 
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
