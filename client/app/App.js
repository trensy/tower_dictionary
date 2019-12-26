import React from 'react';
import {Provider} from 'react-redux';
import Container from './container';
import store from './dal/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
