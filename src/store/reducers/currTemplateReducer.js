/* eslint-disable import/no-anonymous-default-export */

export default (state = [], action) => {

    switch (action.type) {
        case 'SET_TEMPLATE':
            return  action.payload;
        default:
            return state;
    }
};