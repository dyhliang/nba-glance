import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let teamName = "";

function WhpfPage() {
    const [rndPlayer, setRndPlayer] = useState([]);
    const [guess, setGuess] = useState("");
    const [msg, setMsg] = useState("");

    const GetRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        let new_url = `https://www.balldontlie.io/api/v1/players/${randomNum}`

        fetch(new_url)
            .then(res => res.json())
            .then(res => {
                setRndPlayer(res);
                teamName = res["team"]["full_name"];
                console.log(res, teamName);
            })
            .catch(err => console.error(err));
    };

    function getMsg(guess) {
        if (guess === teamName) {
            return "Correct!";
        } else {
            return `Wrong! He played for the ${teamName}`;
        }
    };

    function CheckUserGuess(guess) {
        setMsg(getMsg(guess));
    }

    useEffect(() => {
        GetRndPlayer();
    }, []);

    return (
        <div className="App">
            <h5>
                <a href='https://www.youtube.com/watch?v=8avNI5Tgzfs'><i>Inspired by the TNT segment</i></a>
            </h5>
            <h1> Who He Play For? </h1>

            <br></br>
            <ul>
                <div>{rndPlayer.first_name} {rndPlayer.last_name} - {rndPlayer.position} </div>
            </ul>

            <br></br>
            <form>Your guess:
                <input
                    type='text'
                    id='user-guess'
                    placeholder="Enter full team name"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button onClick={CheckUserGuess}> Guess! </button>
                {msg}
            </form>

            <footer>
                <br></br>
                <Link className="App-link" to="/">Back to the Home Page</Link>
            </footer>

        </div>
    );

}

export default WhpfPage;