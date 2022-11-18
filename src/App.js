import React, { useEffect, useState } from 'react';
import './App.css';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {

    const [news, setNews] = useState([]);
    const GetNews = () => {
        fetch(`https://tabm1jhbeb.execute-api.us-west-2.amazonaws.com/Alpha`)
            .then((response) => response.json())
            .then((responseJson) => {
                const parsed = responseJson;
                let hlines1 = `${parsed[0]["title"]}`
                let hlines2 = `${parsed[1]["title"]}`
                let hlines3 = `${parsed[2]["title"]}`
                let hlines4 = `${parsed[3]["title"]}`
                let hlines5 = `${parsed[4]["title"]}`

                let headlines = `${hlines1} ${hlines2} ${hlines3} ${hlines4} ${hlines5}`;

                //let headlines = `${parsed[0]["title"]} ${parsed[1]["title"]} \n${parsed[2]["title"]} ${parsed[3]["title"]} ${parsed[4]["title"]}`
                setNews(headlines);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        GetNews();
    }, []);

    return (
        <div className="App">
            <h1> Today's Headlines: </h1>
            <GetNews></GetNews> 
            {JSON.stringify(news, null, 2)}

            <h1> Standings: </h1>
        </div>
    );
}

export default App;