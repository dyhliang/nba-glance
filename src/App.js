import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import WhpfPage from './components/WhpfPage';

//const API_URL = 'https://www.balldontlie.io/api/v1/players'

function App() {
    return (
        <div className="App">
            <header>
                <Router>
                    <header className="App-header">
                        <Route path="/" exact>
                            <HomePage />
                        </Route>

                        <Route path="/whpf">
                            <WhpfPage />
                        </Route>
                    </header>
                </Router>
            </header>

        </div>
    );
}

export default App;