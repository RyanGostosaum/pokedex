import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from '../../actions';
import List from '../../components/List';

function Dashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, []);
    const state = useSelector(state => state.rootReducer);
    console.log(state);
    
    return (
        <div>
            {/* {results.length < 0 ? null : <List data={results} />} */}
        </div>
    );
}



export default Dashboard;

