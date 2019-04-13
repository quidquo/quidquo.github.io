import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {persistReducer, persistStore} from 'redux-persist';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../modules/reducer-index';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const browserHistory = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enableReduxDevTools = window.location.hostname.includes('localhost');

let composeEnhancers;
if (enableReduxDevTools) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25}) || compose;
} else {
    composeEnhancers = compose;
}

const appStore = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(routerMiddleware(browserHistory), thunk))
);

if (module.hot && module.hot.accept) {
    module.hot.accept('../modules/reducer-index', () => {
        const nextRootReducer = require('../modules/reducer-index');
        appStore.replaceReducer(nextRootReducer);
    });
}

export const store = appStore;
export const persistor = persistStore(appStore);
export const history = browserHistory;