import React, { useEffect, useState } from 'react';
import './App.css';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {
    /**const [players, setPlayers] = useState([]);
    const [searchVal, setSearchVal] = useState("");**/

    /** const searchPlayers = async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        setPlayers(data.Search)
    } **/
    const [news, setNews] = useState([]);
    const getNews = () => {
        fetch(`https://tabm1jhbeb.execute-api.us-west-2.amazonaws.com/Alpha`)
            .then((response) => response.json())
            .then((responseJson) => {
                setNews(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="app">
            <h1> NBA News</h1>
            <useEffect></useEffect>
            {JSON.stringify(news, null, 2)}
        </div>
    );
}

export default App;