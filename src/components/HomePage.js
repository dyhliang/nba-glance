import React from 'react';
import { Link } from 'react-router-dom';
import HeadlinesPage from './HeadlinesPage';
import RecentGamesPage from './RecentGames';
import EastStandingsPage from './EastStandingsPage';
import WestStandingsPage from './WestStandingsPage';
import SeedingPage from './SeedingPage';

function HomePage() {
    return (
        <div className="home">
            <div class='row'>
                <table>
                    <tr>
                        <td><h1> NBA Index </h1></td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <h2>
                                <Link className="App-link" to="/whpf">Who He Play For?</Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <h2>
                                <Link className="App-link" to="/rnd-game">NBA Rewind</Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <h2>
                                <Link className="App-link" to="/matchups">Playoffs Matchups</Link>
                            </h2>
                        </td>
                    </tr>
                </table>
            </div>

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