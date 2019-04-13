import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import Portal from './portal/components/Portal';

import '../styles/main.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Portal}/>
                </Switch>
            </div>
        );
    }
}