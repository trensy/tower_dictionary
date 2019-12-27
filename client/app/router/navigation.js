import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as pages from './index';

const AppNavigator = createStackNavigator({
  Home: {
    screen: pages.Home,
  },
});

export default createAppContainer(AppNavigator);
