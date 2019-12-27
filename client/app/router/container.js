import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler, ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Navigation from './navigation';

connect(state => ({ nav: state.nav }));

export default class AppNavigationState extends Component {
  componentWillUnmount() {
    !!this.onBackPress &&
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.lastBackPressed = null;
  }
  onBackPress = () => {
    const { dispatch } = this.props;
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    dispatch(NavigationActions.back());
    return true;
  };

  render = () => (
    <Navigation
      ref={ref => {
        this.root = ref;
      }}
      onNavigationStateChange={(prevState, currentState) => {
        const appState = currentState.routes;
        if ((appState && appState.length > 1) || appState[0].index > 0) {
          BackHandler.removeEventListener(
            'hardwareBackPress',
            this.onBackPress,
          );
        } else {
          BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        }
      }}
    />
  );
}
