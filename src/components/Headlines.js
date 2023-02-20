import React, { useEffect, useState } from 'react';

function Headlines() {
    const [news, setNews] = useState([]);

    const GetNews = () => {
        fetch('https://nba-stories.onrender.com/articles?source=nba')
            .then(res => res.json())
            .then(res => {
                setNews(res);
                console.log(res);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        GetNews();
    }, []);

    return (
        <div className="App">
            <h1>Headlines</h1>
            <br></br>
            <table>
                {news.map(article => (
                    <li><news> <a href={article.url}> {article.title} </a> </news> </li>
                ))}
            </table>
        </div>
    )
}

export default Headlines;