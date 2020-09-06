import { FETCH_USERS_SUCCESS  } from '../actionTypes';

const initialState = {}


export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_SUCCESS: {
            return {
                users: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}