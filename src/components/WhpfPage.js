import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let teamName = "";
let playerName = "";

function WhpfPage() {
    const [rndPlayer, setRndPlayer] = useState([]);
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [moreInfo, setMoreInfo] = useState([]);
    const [isHidden, setIsHidden] = useState(false);

    const getRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        fetch(`https://www.balldontlie.io/api/v1/players/${randomNum}`)
            .then(res => res.json())
            .then(res => {
                setRndPlayer(res);
                teamName = res["team"]["full_name"];
                playerName = res["last_name"].toLowerCase();
                let some_link = `https://api-nba-v1.p.rapidapi.com/players?search=${playerName}`;
                lookupPlayer(some_link);
                console.log(res, playerName, some_link);
            })
            .catch(err => console.error(err));

    };

    const lookupPlayer = (playerUrl) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(playerUrl, options)
            .then(res => res.json())
            .then(res => {
                setMoreInfo(res.response);
                console.log(res.response);
            })
            .catch(err => console.error(err));
    }

    const checkGuess = () => {
        if (guess === teamName) {
            setFeedback("Correct!");
        } else {
            setFeedback(`Wrong - He last played for the ${teamName}.`);
        }
    };

    const getMoreInfo = event => {
        setIsHidden(current => !current);
    }

    function refreshPage() {
        window.location.reload(false);
    };

    useEffect(() => {
        getRndPlayer();
    }, []);

    return (
        <div className="App">
            <h5>
                <a href='https://www.youtube.com/watch?v=8avNI5Tgzfs'><i>Inspired by the TNT segment</i></a>
            </h5>
            <h1> Who He Play For? </h1>

            <br></br>

            <h2>{rndPlayer.first_name} {rndPlayer.last_name} - ({rndPlayer.position}) </h2>

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
                <button onClick={checkGuess}> Guess! </button>
                <br></br>
                <br></br>
                {feedback}
                <br></br>
            </form>

            <div><button onClick={getMoreInfo}> More info </button></div>
            {isHidden &&
                (
                    <div> 
                        <div>Height: {rndPlayer.height_feet} feet {rndPlayer.height_inches} inches </div>
                        <div>College: {moreInfo.map(output => output.affiliation)} </div>
                        <div>Debut: {moreInfo.map(output => output.nba.start)}</div>
                    </div>
                )
            }

            <button onClick={refreshPage}> Another Player </button>

            <footer>
                <br></br>
                <Link className="App-link" to="/">Back to the Home Page</Link>
            </footer>

        </div>
    );

}

export default WhpfPage;