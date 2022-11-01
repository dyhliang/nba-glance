/* No difference between .js and .jsx file */
import React from 'react';

const PlayerCard = ({ player: { id, first_name, last_name, position } }) => {
    return (
        <div className="player" key={id}>
            <div>
                <span>{first_name}</span>
                <h3>{last_name}</h3>
            </div>

            <div>
                <p>{position}</p>
            </div>

        </div>
    )
}

export default PlayerCard;