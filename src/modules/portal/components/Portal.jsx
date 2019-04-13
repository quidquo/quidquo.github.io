import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import TopBar from './TopBar';
import Content from './Content';

import {fetchCommittees} from '../../graphs/redux/committees';
import {fetchContributions} from '../../graphs/redux/contributions';

export class Portal extends React.Component {
    componentDidMount() {
        this.props.fetchCommittees();
        this.props.fetchContributions();
    }

    render() {
        return (
            <div>
                <TopBar/>
                <Content/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCommittees: () => dispatch(fetchCommittees()),
        fetchContributions: () => dispatch(fetchContributions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portal);