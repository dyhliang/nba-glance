import React from 'react';
import EastStandingsPage from './EastStandingsPage';
import WestStandingsPage from './WestStandingsPage';
import { Link } from 'react-router-dom';

function StandingsPage() {
    return (
        <div className="standings">
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