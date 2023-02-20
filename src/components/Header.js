import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div class='top-header'>
                <table>
                    <tr>
                        <td><h1><Link className="App-link" to="/" class="box"> NBA Glance </Link> </h1></td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <h2>
                                <Link className="App-link" to="/standings" class="box"> Standings </Link>
                            </h2>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <whpf>
                                <b><Link className="App-link" to="/whpf" class="box"> Guess Who [He Played For]? </Link></b>
                            </whpf>
                        </td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <td>
                            <rewind>
                                <Link className="App-link" to="/rewind" class="box"> Rewind </Link>
                            </rewind>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Header;