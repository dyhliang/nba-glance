import React, { useEffect, useState } from 'react';

function StandingsPage() {

    const [AtlanticStandings, setAtlanticStandings] = useState([]);
    const [CentralStandings, setCentralStandings] = useState([]);
    const [SoutheastStandings, setSoutheastStandings] = useState([]);
    const [NorthwestStandings, setNorthwestStandings] = useState([]);
    const [PacificStandings, setPacificStandings] = useState([]);
    const [SouthwestStandings, setSouthwestStandings] = useState([]);

    const GetLeagueStandings = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61', 'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        const GetAtlanticStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=atlantic', options)
                .then(res => res.json())
                .then(res => {
                    console.log(res.response)
                    setAtlanticStandings(res.response);
                }).catch(err => console.error(err));
        };

        const GetCentralStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=central', options)
                .then(res => res.json())
                .then(res => {
                    setCentralStandings(res.response);
                }).catch(err => console.error(err));
        };

        const GetSoutheastStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=southeast', options)
                .then(res => res.json())
                .then(res => {
                    setSoutheastStandings(res.response);
                }).catch(err => console.error(err));
        };

        const GetNorthwestStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=northwest', options)
                .then(res => res.json())
                .then(res => {
                    setNorthwestStandings(res.response);
                }).catch(err => console.error(err));
        };

        const GetPacificStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=pacific', options)
                .then(res => res.json())
                .then(res => {
                    setPacificStandings(res.response);
                }).catch(err => console.error(err));
        };

        const GetSouthwestStandings = () => {
            fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&division=southwest', options)
                .then(res => res.json())
                .then(res => {
                    setSouthwestStandings(res.response);
                }).catch(err => console.error(err));
        };

        GetAtlanticStandings();
        GetCentralStandings();
        GetSoutheastStandings();
        GetNorthwestStandings();
        GetPacificStandings();
        GetSouthwestStandings();

    };

    useEffect(() => {
        GetLeagueStandings();
    }, []);

    return (
        <div>
            <h1> Standings </h1>
            <h2> Eastern Conference: </h2>

            <h3> Atlantic Division </h3>
            <ul>
                {AtlanticStandings.map(output => <div>{output.team.name} {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

            <h3> Central Division </h3>
            <ul>
                {CentralStandings.map(output => <div>{output.team.name} {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

            <h3> Southeast Division </h3>
            <ul>
                {SoutheastStandings.map(output => <div>{output.team.name} (W-L): {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

            <br></br>
            <h2> Western Conference: </h2>
            <h3> Northwest Division </h3>
            <ul>
                {NorthwestStandings.map(output => <div>{output.team.name} {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

            <h3> Pacific Division </h3>
            <ul>
                {PacificStandings.map(output => <div>{output.team.name} {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

            <h3> Southwest Division </h3>
            <ul>
                {SouthwestStandings.map(output => <div>{output.team.name} (W-L): {output.win.total}-{output.loss.total} {output.win.percentage}</div>)}
            </ul>

        </div>
    )
}

export default StandingsPage;