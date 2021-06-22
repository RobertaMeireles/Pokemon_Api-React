import React from 'react'

function PokemonList({props}) {

    return (
        <div className="list">
            {props.map(p => (
                <div className="item" key={p}>{p}</div>
            ))}
        </div>
    );
  }
  
  export default PokemonList
  