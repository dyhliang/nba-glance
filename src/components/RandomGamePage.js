import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomGamePage() {
    const [rndGameStats, setRndGameStats] = useState([]);

    const GetRndGame = () => {
        let randomNum = (Math.floor(Math.random() * (9000 - 1 + 1)) + 1).toString();
        let new_url = `https://api-nba-v1.p.rapidapi.com/games?id=${randomNum}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(new_url, options)
            .then(res => res.json())
            .then(res => {
                setRndGameStats(res.response);
                console.log(randomNum, res.response)
            })
            .catch(err => console.error(err));
    };


    useEffect(() => {
        GetRndGame();
    }, []);

    return (
        <div className="App">
            <h1> Random Game Highlight</h1>
            <ul>
                {rndGameStats.map(output =>
                    <div> {output.date.start.slice(0, 10)}
                        <br></br>
                        {output.teams.home.name} {output.scores.home.points} - {output.teams.visitors.name} {output.scores.visitors.points}
                        <br></br>
                        @ {output.arena.name} in {output.arena.city}
                        <br></br>
                        (Story): {output.nugget}
                        <br></br>
                    </div>)}
            </ul>

            <footer>
                <Link className="App-link" to="/">Back to the Home Page</Link>
            </footer>
        </div>
    );

};

export default RandomGamePage;