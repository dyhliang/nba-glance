import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Headlines from './Headlines';
import RecentGamesPage from './RecentGames';

function HomePage() {
    return (
        <div>
            <div class='row'>
                <Header></Header>
            </div>

            <div class='column'>
                <Headlines></Headlines>
            </div>

            <div class='column'>
                <RecentGamesPage></RecentGamesPage>
            </div>
        </div>

    );
}

export default HomePage;