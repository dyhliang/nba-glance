import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PlayerCard from './PlayerCard';
import './App.css';

const API_URL = 'https://www.balldontlie.io/api/v1/players'

const App = () => {
    const [players, setPlayers] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    const searchPlayers = async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();

        setPlayers(data.Search)
    }

    useEffect(() => {
        searchPlayers('');
    }, []);

    return (
        <div className="app">
            <header>
                <b>Home Games Stats</b>
            </header>
            <br></br>
            <br></br>
            <h1> NBA Index</h1>

            <div className="search">
                <input
                    placeholder="Search for players"
                    value={searchVal}
                    onChange={(e) => { setSearchVal(e.target.value)}} />
                <FaSearch alt="search"
                    onClick={() => { searchPlayers(searchVal)}}
                />
            </div>

            {players?.length > 0 ? (
                <div className="container">
                    {players.map((player) => (
                        <PlayerCard player={player} />))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No players found.</h2>
                </div>
            )}
        </div>
    );
}

export default App;