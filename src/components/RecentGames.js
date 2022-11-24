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
                console.log(todaysDate);
                setRecentGames(res.response);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        GetRecentGames();
    }, []);

    return (
        <div className="App">
            <h1> Most Recent Games </h1>
            <h5> NOTE: The API only shows the current day's games after the first tipoff, refer to a schedule for this time.
                Otherwise, if games haven't tipped off yet, this will show the previous day's scores.
            </h5>
            <ul>
                {RecentGames.map(output => <div>{output.teams.home.name} {output.scores.home.points}  -  {output.teams.visitors.name} {output.scores.visitors.points} ({output.status.long[0]})</div>)}
            </ul>

        </div>
    )
}

export default RecentGamesPage;