import React, { useEffect, useState } from 'react';
import { apikey } from './apikey';

function RecentGamesPage() {

    const [RecentGames, setRecentGames] = useState([]);

    const GetRecentGames = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todaysDate = yyyy + "-" + "02" + "-" + "17";

        const options = apikey();

        fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${todaysDate}`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res.response);
                setRecentGames(res.response);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        GetRecentGames();
    }, []);

    return (
        <div className="App">
            <h1> Scores </h1>
            <h5> <i>(S = Scheduled to play, I = In Progress, F = Final)</i> </h5>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th> <highlighter> Home </highlighter> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> <highlighter> Away </highlighter> </th>
                    </tr>
                </thead>
                <tbody>
                    {RecentGames.map(output =>
                        <tr>
                            <td> {output.teams.home.nickname}  </td>
                            <td> <highlighter>{output.scores.home.points}</highlighter> </td>
                            <td> - </td>
                            <td> <highlighter>{output.scores.visitors.points}</highlighter> </td>
                            <td> {output.teams.visitors.nickname} </td>
                            <td> ({output.status.long[0]}) </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default RecentGamesPage;