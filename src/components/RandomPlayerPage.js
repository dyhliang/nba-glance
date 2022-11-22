import React, { useEffect, useState } from 'react';

function RandomPlayerPage() {
    const [rndPlayer, setRndPlayer] = useState([]);

    const GetRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        let new_url = `https://www.balldontlie.io/api/v1/players/${randomNum}`

        fetch(new_url)
            .then(res => res.json())
            .then(res => {
                console.log(res, new_url);
                setRndPlayer(res);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        GetRndPlayer();
    }, []);

    return (
        <div className="App">
            <h1> Random Player </h1>
            <ul>
                <div>{rndPlayer.first_name} {rndPlayer.last_name} - {rndPlayer.position} </div>
            </ul>
        </div>
    );

};

export default RandomPlayerPage;