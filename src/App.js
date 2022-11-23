import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RandomGamePage from './components/RandomGamePage';
import WhpfPage from './components/WhpfPage';

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

                        <Route path="/rnd-game">
                            <RandomGamePage />
                        </Route>
                    </header>
                </Router>
            </header>

        </div>
    );
}

export default App;