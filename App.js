import { Navigation } from 'react-native-navigation';

import Home from './src/components/views/Home/Home';
import Login from './src/components/views/Login/Login';
import AddPost from './src/components/views/AddPost/AddPost';

Navigation.registerComponent('sellitapp.Home', () => Home);
Navigation.registerComponent('sellitapp.Login', () => Login);
Navigation.registerComponent('sellitapp.AddPost', () => AddPost);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'sellitapp.Login', 
    title: 'Login',
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
