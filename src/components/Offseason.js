import React from 'react';

function Offseason() {

    let newSeasonDate = new Date('10/01/2023');
    let draftDate = new Date('06/22/2023');
    let faDate = new Date('06/30/2023');

    const daysUntil = (date_1) =>{
        let today = new Date();
        let difference = date_1.getTime() - today.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    let daysUntilDraft = daysUntil(draftDate);
    let daysUntilFA = daysUntil(faDate);
    let daysUntilNewSeason = daysUntil(newSeasonDate);

    return (
        <div className="App">
            <h3> There are...</h3>
            <h4><highlighter>{daysUntilDraft}</highlighter> days until the NBA Draft</h4>
            <h4><highlighter>{daysUntilFA}</highlighter> days until Free Agency starts</h4>
            <h4><highlighter>{daysUntilNewSeason}</highlighter> days until the start of the new season</h4>
        </div>
    )
};

export default Offseason;