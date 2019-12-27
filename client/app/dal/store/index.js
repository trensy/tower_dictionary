import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(logger);
  console.disableYellowBox = true;
  console.ignoredYellowBox = ['Warning: ...'];
}

export default function configureStore(initialState) {
  let store = createStore(
    reducers,
    autoRehydrate,
    initialState,
    applyMiddleware(...middlewares),
  );
  persistStore(store);
  return store;
}
