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

export function fetchData() {
    
    return async function (dispatch) {
        dispatch(reqInit())

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
        
        if(response.status === 200) {
            dispatch(fetchDataSucess(response.data))
        } else {
            dispatch(reqFail(response.data))
        }
    }
}