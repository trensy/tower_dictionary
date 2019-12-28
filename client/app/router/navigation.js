import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as pages from './index';

const AppNavigator = createStackNavigator(
  {
    Home: pages.Home,
    Details: pages.Detail,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
