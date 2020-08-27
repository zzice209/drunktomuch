import { ADD_TODO, FETCH_USERS_SUCCESS  } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }
        }
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