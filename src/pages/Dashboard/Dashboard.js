import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchDataIfNeeded } from '../../actions/index';

function Dashboard(props) {
    const [poke, setPoke] = useState([])
    useEffect(() => {
        props.dispatch(FetchDataIfNeeded())
    }, [])

    useEffect(() => {
        console.log(props.state.finished)
        setPoke(props.state.data)
    })

    return (
        <div>
            {props.finished ? <ul className="spot-list" >
                {
                    poke.map(p => (
                        <li key={p.name}>
                            <strong>{p.name}</strong>
                        </li>
                    ))
                }
            </ul> : 'Loading..'}
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducer
});

export default connect(mapStateToProps)(Dashboard)

