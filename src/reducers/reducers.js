import * as actions from "../actions/types";

const initState = {
    data: [],
    error: null,
    ready: false,
};

export default function rootReducer(state = initState, action) {
    switch (action.type) {
        case actions.REQ_INIT:
            return {
                ready: false,
                error: null,
                ...state,
            };
        case actions.REQ_FAIL:
            return {
                ready: true,
                error: action.payload,
                ...state,
            };
        case actions.REQ_SUCCESS:
            return {
                ready: true,
                error: null,
                data: action.payload
            }
        default:
            return state;
    }
}