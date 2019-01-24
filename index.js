import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('navigation.playground.menu', () => App);
Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);
Navigation.registerComponent('navigation.playground.menu2', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'navigation.playground.menu',
            name: 'navigation.playground.menu',
          },
        },
        center: {
          component: {
            id: 'navigation.playground.WelcomeScreen',
            name: 'navigation.playground.WelcomeScreen',
          },
        },
        right: {
          component: {
            id: 'navigation.playground.menu2',
            name: 'navigation.playground.menu2',
          },
        },
      },
    },
  });
});
