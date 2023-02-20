import React from 'react';
import Header from './Header';
import Headlines from './Headlines';
import Scores from './Scores';

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
                <Scores></Scores>
            </div>
        </div>

    );
}

export default HomePage;