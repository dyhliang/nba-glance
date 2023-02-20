import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RewindPage from './components/RewindPage';
import StandingsPage from './components/StandingsPage';
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

                        <Route path="/standings" exact>
                            <StandingsPage />
                        </Route>

                        <Route path="/whpf">
                            <WhpfPage />
                        </Route>

                        <Route path="/rewind">
                            <RewindPage />
                        </Route>
                    </header>
                </Router>
            </header>

        </div>
    );
}

export default App;