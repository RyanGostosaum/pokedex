import axios from 'axios';
import * as actions from './types';

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