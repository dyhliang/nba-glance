import React, { useEffect, useState } from 'react';

function HeadlinesPage() {
    const [news, setNews] = useState([]);

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

    useEffect(() => {
        GetNews();
    }, []);

    return (
        <div className="App">
            <h2>Headlines from Around the League</h2>
            <ul>
                {news.map((article) => (
                    <li>{article.title}</li>
                ))}
            </ul>
            <br></br>
        </div>
    )
}


export default HeadlinesPage;