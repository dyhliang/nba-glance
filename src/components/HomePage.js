import React from 'react';
import { Link } from 'react-router-dom';
import HeadlinesPage from './HeadlinesPage';
import RecentGamesPage from './RecentGames';
import StandingsPage from './StandingsPage';

function HomePage() {
    return (
        <div className="Home">

            <h1> NBA Index </h1>
            <h2>
                <Link className="App-link" to="/whpf">Who He Play For?</Link>
            </h2>

            <HeadlinesPage></HeadlinesPage>

            <RecentGamesPage></RecentGamesPage>

            <StandingsPage></StandingsPage>

        </div>
    );
}

export default HomePage;