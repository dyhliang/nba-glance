import React, { useEffect, useState } from 'react';

function Headlines() {
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
            <h1>Headlines</h1>
            <br></br>
            <br></br>
            <table>
                {news.map((article) => (
                    <tr> * {article.title}</tr>
                ))}
            </table>
        </div>
    )
}

export default Headlines;