import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import * as storage from 'redux-storage';
import filter from 'redux-storage-decorator-filter';
import createEngine from 'redux-storage-engine-localstorage';
import { USER_LOGIN_SUC } from '../modules/user/actions';

import initialState from './initialState';
import middlewares from './middlewares';
import reducers from './reducers';

const storeConfigure = (history: History) => {
  const reducer = storage.reducer(combineReducers(reducers));
  const router = routerMiddleware(history);

  // bump up storage version if state structure change
  const engine = filter(createEngine('myApp-0.0.1'), [
    'user',
  ]);

  const storeMiddleware = storage.createMiddleware(engine, [], [
    // White list actions, will save everything if leave blank here
    USER_LOGIN_SUC,
  ]);

  const createStoreWithMiddleware = applyMiddleware(router, storeMiddleware, ...middlewares)(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  const load = storage.createLoader(engine);
  // will trigger storage load action
  load(store);

  return store;
};

export default storeConfigure;
