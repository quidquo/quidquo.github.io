import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import storageAvailable from 'storage-available';
import {history, persistor, store} from './store/create-store';
import App from './modules/App';

const localStorageEnabled = storageAvailable('localStorage');
const router = <ConnectedRouter history={history}><Route path='/' component={App}/></ConnectedRouter>;
const appContent = localStorageEnabled ? <PersistGate persistor={persistor}>{router}</PersistGate> : router;

ReactDOM.render(
    <Provider store={store}>
        {appContent}
    </Provider>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
