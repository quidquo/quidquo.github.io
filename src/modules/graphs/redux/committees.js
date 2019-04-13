import {committeeUrl} from '../../../utilities/url-builder';

const UPDATE = `quidquo/committees/UPDATE`;
const LOADING = `quidquo/committees/LOADING`;
const ERRORED = `quidquo/committees/ERRORED`;

export default (state = {}, action = {}) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                committees: action.payload,
                loading: false,
                errored: false
            };
        case LOADING:
            return {
                ...state,
                committees: null,
                loading: true,
                errored: false
            };
        case ERRORED:
            return {
                ...state,
                committees: null,
                loading: false,
                errored: true
            };
        default:
            return state;
    }
};

export const updateCommittees = committees => {
    return {
        type: UPDATE,
        payload: committees
    };
};

export const committeesLoading = () => {
    return {
        type: LOADING
    };
};

export const committeesErrored = () => {
    return {
        type: ERRORED
    };
};

export const fetchCommittees = () => {
    return dispatch => {
        dispatch(committeesLoading());

        fetch(committeeUrl(), {
            method: 'get'
        }).then(response => {
            if (!response.ok) {
                dispatch(committeesErrored());
            } else {
                return response.json();
            }
        }).then(responseJson => {
            dispatch(updateCommittees(responseJson));
        });
    };
};