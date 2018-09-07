import { Navigation } from 'react-native-navigation';

const LoadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'sellitapp.Home',
        label: 'Home',
        title: 'Home'
      },
      {
        screen: 'sellitapp.AddPost',
        label: 'Sell It',
        title: 'Sell It'
      }
    ]
  });
}

export default LoadTabs;