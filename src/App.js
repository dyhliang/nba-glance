import React from 'react';
import './App.css';
import HeadlinesPage from './components/HeadlinesPage';
import RandomPlayerPage from './components/RandomPlayerPage';
import RecentGamesPage from './components/RecentGames';
import StandingsPage from './components/StandingsPage';
//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {
    return (
        <div className="App">
            <h1> NBA Index </h1>
            <HeadlinesPage></HeadlinesPage>

            <RecentGamesPage></RecentGamesPage>

            <StandingsPage></StandingsPage>

            <RandomPlayerPage></RandomPlayerPage>
        </div>
    );
}

export default App;