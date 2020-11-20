import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {token: ' '};
export const store = createStore(reducer, initialState);