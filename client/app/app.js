import React from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Container from './router/container';
import configureStore from './dal/store';
const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
