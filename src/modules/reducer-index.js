import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import committees from './graphs/redux/committees'
import contributions from './graphs/redux/contributions'

export default combineReducers({
    router: routerReducer,
    committees,
    contributions
});