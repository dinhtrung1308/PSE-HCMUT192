/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
/*import {store} from './components/redux/store';
import {Provider} from 'react-redux';

const Render = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);*/

AppRegistry.registerComponent(appName, () => App);
