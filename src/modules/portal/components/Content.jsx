import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import Blog from '../../blog/components/Blog';
import Tools from '../../graphs/components/Tools';

export default class Content extends React.Component {
    render() {
        return <div className='container'>
            <Switch>
                <Route path='/blog' component={Blog}/>
                <Route path='/tools' component={Tools}/>
            </Switch>
        </div>;
    }
}