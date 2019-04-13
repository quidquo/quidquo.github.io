const UPDATE = 'quidquo/properties/UPDATE';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case UPDATE:
            return action.payload;
        default:
            return state;
    }
}

export const updateProperties = properties => {
    return {
        type: UPDATE,
        payload: properties
    };
};