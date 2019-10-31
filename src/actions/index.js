import api from '../service/api';
import * as actions from './types';

function fetchData() {
    return dispatch => {
        dispatch(reqInit())
        return api
            .get("/pokemon?limit=151").then(res => {
                dispatch(fetchDataSucess(res.data))
                return res.data
            }).catch(e => dispatch(reqFail(e)))
    }
}

function shouldFetchData(state) {
    const pkms = state.data.length > 1
    if (pkms) {
        return false
    } else {
        return true
    }
}

export function FetchDataIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchData(getState().rootReducer) === true) {
            return dispatch(fetchData())
        }
    };
}

export const reqInit = () => ({
    type: actions.REQ_INIT
});
export const reqFail = error => ({
    type: actions.REQ_FAIL,
    payload: {
        error
    }
});

export const fetchDataSucess = data => ({
    type: actions.REQ_SUCCESS, payload: data
})