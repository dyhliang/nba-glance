import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let randomNum = (Math.floor(Math.random() * (9000 - 1 + 1)) + 1).toString();

function RandomGamePage() {
    const [rndGameStats, setRndGameStats] = useState([]);
    const [moreInfo, setMoreInfo] = useState([]);
    const [isHidden, setIsHidden] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    const getRndGame = () => {
        let new_url = `https://api-nba-v1.p.rapidapi.com/games?id=${randomNum}`

        fetch(new_url, options)
            .then(res => res.json())
            .then(res => {
                setRndGameStats(res.response);
                setMoreInfo(res.response);
                console.log(res.response);
            })
            .catch(err => console.error(err));
    };

    const getMoreInfo = event => {
        setIsHidden(current => !current);
    }

    function refreshPage() {
        window.location.reload(false);
    };

    useEffect(() => {
        getRndGame();
    }, []);

    return (
        <div className="App">
            <h1> Random Game Highlight </h1>
            {rndGameStats.map(output =>
                <div>
                    <div>{output.date.start.slice(0, 10)} @ {output.arena.name} in {output.arena.city}</div>
                    <div>{output.teams.home.name} {output.scores.home.points} - {output.teams.visitors.name} {output.scores.visitors.points}</div>
                    <div>Story - {output.nugget} </div>
                </div>)}

            <div><button onClick={getMoreInfo}> More info </button></div>
            {isHidden &&
                (moreInfo.map(output =>
                    <div>
                        <div>Team records after this game:</div>
                        <div>{output.teams.home.name} ({output.scores.home.win}-{output.scores.home.loss})</div>
                        <div>{output.teams.visitors.name} ({output.scores.visitors.win}-{output.scores.visitors.loss})</div>
                    </div>
                ))
            }

            <br></br>
            <button onClick={refreshPage}> Another Game </button>
            <br></br>
            <footer>
                <div><Link className="App-link" to="/">Back to the Home Page</Link></div>
            </footer>
        </div>
    );

};

export default RandomGamePage;