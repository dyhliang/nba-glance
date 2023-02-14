import React, { useEffect, useState } from 'react';

function RecentGamesPage() {

    const [RecentGames, setRecentGames] = useState([]);

    const GetRecentGames = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todaysDate = yyyy + "-" + mm + "-" + dd;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61', 'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

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
            <table>
                <thead>
                    {RecentGames.map(output => <tr>{output.teams.home.nickname} {output.scores.home.points}  -  {output.teams.visitors.nickname} {output.scores.visitors.points} ({output.status.long[0]})</tr>)}
                </thead>
            </table>
        </div>
    )
}

export default RecentGamesPage;