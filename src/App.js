import React, { useEffect, useState } from 'react';
import './App.css';
import RecentGamesPage from './components/RecentGames';
import StandingsPage from './components/StandingsPage';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {

    const [news, setNews] = useState([]);
    const [rndPlayer, setRndPlayer] = useState([]);

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


    const GetRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        let new_url = `https://api-nba-v1.p.rapidapi.com/players?id=${randomNum}`
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
                setRndPlayer(res.response);
                console.log(res.response)
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        GetNews();
        GetRndPlayer();
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

            <RecentGamesPage></RecentGamesPage>
            
            <StandingsPage></StandingsPage>


            <h1> Random Player </h1>
            <ul>
                {rndPlayer.map(output => <div>{output.firstname} {output.lastname} </div>)}
            </ul>

        </div>
    );
}

export default App;