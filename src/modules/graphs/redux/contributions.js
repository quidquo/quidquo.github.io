import {contributionsUrl} from '../../../utilities/url-builder';

const UPDATE = `quidquo/contributions/UPDATE`;
const LOADING = `quidquo/contributions/LOADING`;
const ERRORED = `quidquo/contributions/ERRORED`;

export default (state = {}, action = {}) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                contributions: action.payload,
                loading: false,
                errored: false
            };
        case LOADING:
            return {
                ...state,
                contributions: null,
                loading: true,
                errored: false
            };
        case ERRORED:
            return {
                ...state,
                contributions: null,
                loading: false,
                errored: true
            };
        default:
            return state;
    }
};

export const updateContributions = contributions => {
    return {
        type: UPDATE,
        payload: contributions
    };
};

export const contributionsLoading = () => {
    return {
        type: LOADING
    };
};

export const contributionsErrored = () => {
    return {
        type: ERRORED
    };
};

export const fetchContributions = () => {
    return dispatch => {
        dispatch(contributionsLoading());

        fetch(contributionsUrl(), {
            method: 'get'
        }).then(response => {
            if (!response.ok) {
                dispatch(contributionsErrored());
            } else {
                return response.json();
            }
        }).then(responseJson => {
            dispatch(updateContributions(responseJson));
        });
    };
};