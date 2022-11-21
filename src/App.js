import React, { useEffect, useState } from 'react';
import './App.css';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {

    const [news, setNews] = useState([]);
    const [eastStandings, setEastStandings] = useState([]);
    const [westStandings, setWestStandings] = useState([]);
    const [gamesToday, setGamesToday] = useState([]);

    const GetNews = () => {
        fetch(`https://tabm1jhbeb.execute-api.us-west-2.amazonaws.com/Alpha`)
            .then((response) => response.json())
            .then((responseJson) => {
                setNews(responseJson);
                return responseJson.news;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const GetEastStandings = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&conference=east', options)
            .then(res => res.json())
            .then(res => {
                console.log(res.response)
                setEastStandings(res.response);
            })
            .catch(err => console.error(err));
    };

    const GetWestStandings = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&conference=west', options)
            .then(res => res.json())
            .then(res => {
                setWestStandings(res.response);
            })
            .catch(err => console.error(err));
    };

    const GetGamesToday = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1756b7c53cmshd87a2f2cd4e125ep1eec65jsn5b1acc0a1e61',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-nba-v1.p.rapidapi.com/games?date=2022-11-20', options)
            .then(res => res.json())
            .then(res => {
                setGamesToday(res.response);
                console.log(res.response)
            })
            .catch(err => console.error(err));
    };


    useEffect(() => {
        GetNews();
        GetEastStandings();
        GetWestStandings();
        GetGamesToday();
    }, []);

    return (
        <div className="App">

            <h1> NBA Index </h1>
            <br></br>
            <h2>Headlines from Around the League</h2>
            <ul>
                {news.map((article) => (
                    <li>{article.title}</li>
                ))}
            </ul>
            <br></br>
            <h1> Standings </h1>
            <h2> Eastern Conference: </h2>
            <ul>
                {eastStandings.map(output => <div>{output.team.name} (W-L): {output.win.total}-{output.loss.total}</div>)}
            </ul>

            <h2> Western Conference: </h2>
            <ul>
                {westStandings.map(output => <div>{output.team.name} (W-L): {output.win.total}-{output.loss.total}</div>)}
            </ul>

            <h1> Today's Games </h1>
            <ul>
                {gamesToday.map(output => <div>{output.teams.home.name} {output.scores.home.points}  -  {output.teams.visitors.name} {output.scores.visitors.points}</div>)}
            </ul>

        </div>
    );
}

export default App;