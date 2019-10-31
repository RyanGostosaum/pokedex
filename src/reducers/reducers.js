import * as actions from "../actions/types";

const initialState = {
    data: [],
    loading: false,
    error: null,
    finished: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.REQ_INIT:
            return {
                ...state,
                loading: true,
                error: null,

            };
        case actions.REQ_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,

            };
        case actions.REQ_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                finished: true
            }
        default:
            return state;
    }
}