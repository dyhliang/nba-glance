import React, { useEffect, useState } from 'react';
import { apikey } from './apikey';

function Scores() {

    const [RecentGames, setRecentGames] = useState([]);

    const GetRecentGames = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todaysDate = yyyy + "-" + mm + "-" + dd;

        const options = apikey();

        fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${todaysDate}`, options)
            .then(res => res.json())
            .then(res => {
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
            <h5> <news><i>(S = Scheduled to play, I = In Progress, F = Final)</i></news> </h5>
            <table>
                <thead>
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {RecentGames.map(output =>
                        <tr>
                            <td> {output.teams.visitors.nickname} </td>
                            <td> <highlighter>{output.scores.visitors.points}</highlighter> </td>
                            <td> @ </td>
                            <td> <highlighter>{output.scores.home.points}</highlighter> </td>
                            <td> {output.teams.home.nickname}  </td>
                            <td> ({output.status.long[0]}) </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Scores;