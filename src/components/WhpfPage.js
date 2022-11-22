import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function WhpfPage() {
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
            <h1> Who He Play For? </h1>

            <h2>
                <a href='https://www.youtube.com/watch?v=8avNI5Tgzfs'><i>Inspired by the TNT segment</i></a>
            </h2>

            <br></br>
            <ul>
                <div>{rndPlayer.first_name} {rndPlayer.last_name} - {rndPlayer.position} </div>
            </ul>

            <br></br>
            <br></br>

            <footer>
                <Link className="App-link" to="/">Back to the Home Page</Link>
            </footer>

        </div>
    );

}

export default WhpfPage;