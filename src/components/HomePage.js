import React from 'react';
import { Link } from 'react-router-dom';
import HeadlinesPage from './HeadlinesPage';
import RecentGamesPage from './RecentGames';
import EastStandingsPage from './EastStandingsPage';
import WestStandingsPage from './WestStandingsPage';

function HomePage() {
    return (
        <div className="row">

            <header>
                <h1> NBA Index </h1>
                <h2>
                    <Link className="App-link" to="/whpf">Who He Play For?</Link>
                </h2>

                <h2>
                    <Link className="App-link" to="/rnd-game">NBA Rewind</Link>
                </h2>
            </header>

            <div class='column'>
                <HeadlinesPage></HeadlinesPage>
                <RecentGamesPage></RecentGamesPage>
            </div>

            <div class='column'>
                <EastStandingsPage></EastStandingsPage>
            </div>

            <div class='column'>
                <WestStandingsPage></WestStandingsPage>
            </div>

        </div>
    );
}

export default HomePage;