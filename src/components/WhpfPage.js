import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let teamName = "";

function WhpfPage() {
    const [rndPlayer, setRndPlayer] = useState([]);
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");

    const GetRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        fetch(`https://www.balldontlie.io/api/v1/players/${randomNum}`)
            .then(res => res.json())
            .then(res => {
                setRndPlayer(res);
                teamName = res["team"]["full_name"];
                console.log(res);
            })
            .catch(err => console.error(err));
    };

    const CheckGuess = () => {
        if (guess === teamName) {
            setFeedback("Correct!");
        } else {
            setFeedback(`Wrong - He last played for the ${teamName}.`);
        }
    };


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
            <form onSubmit={(event) => {
                event.preventDefault();
            }}
            >Your guess:
                <input
                    type='text'
                    id='user-guess'
                    placeholder="Enter full team name"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button onClick={CheckGuess}> Guess! </button>
                <br></br>
                <br></br>
                {feedback}
            </form>

            <footer>
                <br></br>
                <Link className="App-link" to="/">Back to the Home Page</Link>
            </footer>

        </div>
    );

}

export default WhpfPage;