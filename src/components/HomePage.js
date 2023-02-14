import React from 'react';
import { Link } from 'react-router-dom';
import Headlines from './Headlines';
import RecentGamesPage from './RecentGames';

function HomePage() {
    return (
        <div className="home">
            <div class='row'>
                <table>
                    <tr>
                        <td><h1> NBA Index </h1></td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <td>
                            <h2>
                                <Link className="App-link" to="/standings"> Standings </Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <td>
                            <h2>
                                <Link className="App-link" to="/matchups"> Playoffs Matchups </Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <td>
                            <h2>
                                <Link className="App-link" to="/whpf"> Who He Play For? </Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <td>
                            <h2>
                                <Link className="App-link" to="/rewind"> Rewind </Link>
                            </h2>
                        </td>
                    </tr>
                </table>
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