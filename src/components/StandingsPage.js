import React from 'react';
import EastStandingsPage from './EastStandingsPage';
import WestStandingsPage from './WestStandingsPage';
import Header from './Header';

function StandingsPage() {
    return (
        <div className="standings">
            <Header></Header>

            <div class='column'>
                <EastStandingsPage></EastStandingsPage>
            </div>

            <div class='column'>
                <WestStandingsPage></WestStandingsPage>
            </div>

        </div>
    );
}

export default StandingsPage;