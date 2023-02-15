import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div class='row'>
                <table>
                    <tr>
                        <td><h1><Link className="App-link" to="/"> NBA Glance </Link> </h1></td>
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

        </div>
    );
}

export default Header;