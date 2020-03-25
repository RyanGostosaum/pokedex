import React from 'react';
import './index.css'

function List({data}) {

    return (
        <div>
            <ul className="poke-list">
                {data === !null ? data.map((poke, i) => (
                    <li key={poke.name}>
                        <header style={{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png)` }} />
                        <strong>{poke.name}</strong>
                    </li>
                )) : null}
            </ul>
        </div>
    );
}



export default List;

