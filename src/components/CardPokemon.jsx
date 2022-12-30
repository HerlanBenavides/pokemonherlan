import React from 'react'

const CardPokemon = ({ pokemon }) => {
    return (
        <div className='todo'>
            <article>
                <h2>{pokemon?.name}</h2>

                <div className="tipo">
                    <ul className="tipoLista">
                        {
                            pokemon?.types.map(type => (
                                <li key={type.type.name}>{type.type.name}</li>
                            ))
                        }
                    </ul>
                </div>

                <br />

                <div className="foto">
                    <img className='imagenWeb' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </div>
                <br />
                <h3>Movements</h3>
                <br />

                <div className="movimientos">
                    <ul>
                        {
                            pokemon?.moves.map(move => (
                                <li key={move.move.name}>{move.move.name}</li>
                            ))
                        }
                    </ul>
                </div>

            </article>

            <footer>Realizado por:</footer>
            <footer>Herlan Benavides</footer>
            <footer>Email:</footer>
            <footer>herlanbenavidesp@gmail.com</footer>

        </div>
    )
}

export default CardPokemon