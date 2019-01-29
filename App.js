/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { TestApp } from './components/TestApp'

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <TestApp />
  </Provider>

export default App

