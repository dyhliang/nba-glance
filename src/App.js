import React, { useEffect, useState } from 'react';
import './App.css';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {

    const [news, setNews] = useState([]);
    const [standings, setStandings] = useState([]);
    const GetNews = () => {
        fetch(`https://tabm1jhbeb.execute-api.us-west-2.amazonaws.com/Alpha`)
            .then((response) => response.json())
            .then((responseJson) => {
                setNews(responseJson);
                console.log(responseJson);
                return responseJson.news;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const GetStandings = () => {
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
                setStandings(res.response);
                console.log(res.response)
            })
            .catch(err => console.error(err));
    };


    useEffect(() => {
        GetNews();
        GetStandings();
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
            <h1> Standings: </h1>
            <ul>
                <h2>Atlantic Division</h2>
                {standings.map(output => <div>{output.team.name} (W-L): {output.win.total}-{output.loss.total}</div>)}
            </ul>

        </div>
    );
}

export default App;