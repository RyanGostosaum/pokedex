import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import './index.css'
function Dashboard() {
    const [poke, setPoke] = useState([])
    useEffect(() => {
        async function loadPoke() {
            const response = await api.get('/pokemon?limit=9')
            setPoke(response.data.results)
        }
        loadPoke()
    }, [])

    return (
        <div>
            <ul className="spot-list">
                {poke.map((poke, i) => (
                    <li key={poke.name}>
                        <header style={{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png)` }} />
                        <strong>{poke.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Dashboard;

