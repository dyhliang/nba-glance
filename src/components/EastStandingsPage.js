import React, { useEffect, useState } from 'react';

function StandingsPage() {

    const [AtlanticStandings, setAtlanticStandings] = useState([]);
    const [CentralStandings, setCentralStandings] = useState([]);
    const [SoutheastStandings, setSoutheastStandings] = useState([]);

    const getLeagueStandings = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61', 'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        const getAtlanticStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=atlantic', options)
                .then(res => res.json())
                .then(res => {
                    console.log(res.response)
                    setAtlanticStandings(res.response);
                }).catch(err => console.error(err));
        };

        const getCentralStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=central', options)
                .then(res => res.json())
                .then(res => {
                    setCentralStandings(res.response);
                }).catch(err => console.error(err));
        };

        const getSoutheastStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=southeast', options)
                .then(res => res.json())
                .then(res => {
                    setSoutheastStandings(res.response);
                }).catch(err => console.error(err));
        };

        getAtlanticStandings();
        getCentralStandings();
        getSoutheastStandings();
    };

    useEffect(() => {
        getLeagueStandings();
    }, []);

    return (
        <div>
            <div className='east'>
                <h1> ECF </h1>
                <h2> Atlantic Division </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>W-L</th>
                            <th>Pct</th>
                            <th>GB</th>
                            <th>L10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AtlanticStandings.map(output =>
                            <tr><td>{output.team.name}</td> <td>{output.win.total}-{output.loss.total}</td> <td>{output.win.percentage.slice(1,5)}</td> <td>{output.gamesBehind}</td> <td>{output.win.lastTen}-{10 - output.win.lastTen}</td></tr>)}
                    </tbody>
                </table>
                <br></br>
                <h2> Central Division </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>W-L</th>
                            <th>Pct</th>
                            <th>GB</th>
                            <th>L10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CentralStandings.map(output =>
                            <tr><td>{output.team.name}</td> <td>{output.win.total}-{output.loss.total}</td> <td>{output.win.percentage.slice(1,5)}</td> <td>{output.gamesBehind}</td> <td>{output.win.lastTen}-{10 - output.win.lastTen}</td></tr>)}
                    </tbody>
                </table>
                <br></br>
                <h2> Southeast Division </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>W-L</th>
                            <th>Pct</th>
                            <th>GB</th>
                            <th>L10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SoutheastStandings.map(output =>
                            <tr><td>{output.team.name}</td> <td>{output.win.total}-{output.loss.total}</td> <td>{output.win.percentage.slice(1,5)}</td> <td>{output.gamesBehind}</td> <td>{output.win.lastTen}-{10 - output.win.lastTen}</td></tr>)}
                    </tbody>
                </table>
                <br></br>
            </div>

        </div>
    )
}

export default StandingsPage;