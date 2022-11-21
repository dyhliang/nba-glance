import React, { useEffect, useState } from 'react';

function RandomPlayerPage() {
    const [rndPlayer, setRndPlayer] = useState([]);

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
        GetRndPlayer();
    }, []);

    return (
        <div className="App">
            <h1> Random Player </h1>
            <ul>
                {rndPlayer.map(output => <div>{output.firstname} {output.lastname} </div>)}
            </ul>
        </div>
    );

};

export default RandomPlayerPage;