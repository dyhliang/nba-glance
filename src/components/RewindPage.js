import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

let randomNum = (Math.floor(Math.random() * (9000 - 1 + 1)) + 1).toString();

function RewindPage() {
    const [rndGameStats, setRndGameStats] = useState([]);
    const [moreStats, setMoreStats] = useState([]);
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
                console.log(res);
                setRndGameStats(res.response);
                setMoreInfo(res.response);
            })
            .catch(err => console.error(err));
    };

    const getMoreStats = () => {
        let game_url = `'https://api-nba-v1.p.rapidapi.com/games/statistics?id=${randomNum}`

        fetch(game_url, options)
            .then(res => res.json())
            .then(res => {
                console.log(res.response);
                setMoreStats(res.response);
            })
            .catch(err => console.error(err));
    }

    const getMoreInfo = event => {
        setIsHidden(current => !current);
    }

    function refreshPage() {
        window.location.reload(false);
    };

    useEffect(() => {
        getRndGame();
        getMoreStats();
    }, []);

    return (
        <div className="App">
            <h1> NBA Rewind </h1>
            {rndGameStats.map((output) =>
                <div>
                    <h4>Date: {output.date.start.slice(0, 10)} &nbsp; &nbsp; &nbsp; &nbsp; Venue: {output.arena.name} in {output.arena.city}, {output.arena.state}</h4>
                    <h2>{output.teams.home.name} {output.scores.home.points} - {output.teams.visitors.name} {output.scores.visitors.points}</h2>
                    <div>Story - {output.nugget} </div>
                </div>)}

            {moreStats.map((output) =>
                <div>
                    <h4>Fastbreak Points: {output.fastBreakPoints} </h4>
                </div>)}

            <br></br>
            <div><button onClick={getMoreInfo}> Toggle Linescore </button></div>
            <br></br>
            {isHidden &&
                (moreInfo.map(output =>
                    <table>
                        <thead>
                            <tr>
                                <th> Quarters </th>
                                <th> 1 </th>
                                <th> 2 </th>
                                <th> 3 </th>
                                <th> 4 </th>
                                <th> OT </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{output.teams.home.name} ({output.scores.home.win}-{output.scores.home.loss}) </td>
                                <td>{output.scores.home.linescore[0]}</td>
                                <td>{output.scores.home.linescore[1]}</td>
                                <td>{output.scores.home.linescore[2]}</td>
                                <td>{output.scores.home.linescore[3]}</td>
                                <td>{output.scores.home.linescore[4]}</td>
                            </tr>
                            <tr>
                                <td>{output.teams.visitors.name} ({output.scores.visitors.win}-{output.scores.visitors.loss}) </td>
                                <td>{output.scores.visitors.linescore[0]}</td>
                                <td>{output.scores.visitors.linescore[1]}</td>
                                <td>{output.scores.visitors.linescore[2]}</td>
                                <td>{output.scores.visitors.linescore[3]}</td>
                                <td>{output.scores.visitors.linescore[4]}</td>
                            </tr>
                            <tr>Lead Changes: {output.leadChanges}, Times Tied: {output.timesTied}</tr>
                        </tbody>
                    </table>
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

export default RewindPage;