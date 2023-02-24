import React, { useEffect, useState } from 'react';
import Header from './Header';
import { apikey } from './apikey';

let teamName = "";
let playerFirstName = "";
let playerLastName = "";

function WhpfPage() {

    const [rndPlayer, setRndPlayer] = useState([]);
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState("");
    const [moreInfo, setMoreInfo] = useState([]);
    const [isHidden, setIsHidden] = useState(false);

    const getRndPlayer = () => {
        let randomNum = (Math.floor(Math.random() * (493 - 1 + 1)) + 1).toString();
        fetch(`https://www.balldontlie.io/api/v1/players/${randomNum}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setRndPlayer(res);
                teamName = res["team"]["full_name"];
                playerFirstName = res["first_name"];
                playerLastName = res["last_name"];
                lookupPlayer(`https://api-nba-v1.p.rapidapi.com/players?search=${playerLastName}`);
            })
            .catch(err => console.error(err));
    };

    const lookupPlayer = (playerUrl) => {
        const options = apikey();

        fetch(playerUrl, options)
            .then(res => res.json())
            .then(res => {
                let searchResults = res.response.map(output => output);
                for (let i = 0; i < searchResults.length; i++) {
                    if (searchResults[i]["firstname"] === playerFirstName) {
                        setMoreInfo(searchResults[i])
                        return;
                    }
                }
            })
            .catch(err => console.error(err));
    }

    const checkGuess = () => {
        if (guess === teamName) {
            setFeedback("Correct!");
        } else {
            setFeedback(`Wrong - He last played for the ${teamName}.`);
        }
    };

    const getMoreInfo = event => {
        setIsHidden(current => !current);
    }

    function refreshPage() {
        window.location.reload(false);
    };

    useEffect(() => {
        getRndPlayer();
    }, []);

    return (
        <div className="App">
            <Header></Header>
            <br></br>
            <whpf>{rndPlayer.first_name} {rndPlayer.last_name} ({rndPlayer.position}) </whpf>
            <br></br>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}
            >   Guess:
                <select name="team-names" id="user-guess">
                    <option value="ATL">Atlanta Hawks</option>
                    <option value="BOS">Boston Celtics</option>
                    <option value="BKN">Brooklyn Nets</option>
                    <option value="CHA">Charlotte Hornets</option>
                    <option value="CHI">Chicago Bulls</option>
                    <option value="CLE">Cleveland Cavaliers</option>
                    <option value="DAL">Dallas Mavericks</option>
                    <option value="DEN">Denver Nuggets</option>
                    <option value="DET">Detroit Pistons</option>
                    <option value="GSW">Golden State Warriors</option>
                    <option value="HOU">Houston Rockets</option>
                    <option value="IND">Indiana Pacers</option>
                    <option value="LAC">LA Clippers</option>
                    <option value="LAL">Los Angeles Lakers</option>
                    <option value="MEM">Memphis Grizzlies</option>
                    <option value="MIA">Miami Heat</option>
                    <option value="MIL">Milwaukee Bucks</option>
                    <option value="MIN">Minnesota Timberwolves</option>
                    <option value="NOP">New Orleans Pelicans</option>
                    <option value="NYK">New York Knicks</option>
                    <option value="OKC">Oklahoma City Thunder</option>
                    <option value="ORL">Orlando Magic</option>
                    <option value="PHI">Philadelphia 76ers</option>
                    <option value="PHX">Phoenix Suns</option>
                    <option value="POR">Portland Trail Blazers</option>
                    <option value="SAC">Sacramento Kings</option>
                    <option value="SAS">San Antonio Spurs</option>
                    <option value="TOR">Toronto Raptors</option>
                    <option value="UTA">Utah Jazz</option>
                    <option value="WAS">Washington Wizards</option>
                    onChange={(e) => setGuess(e.target.value)}
                </select>
                &nbsp; &nbsp; &nbsp;
                <button onClick={checkGuess}> Guess! </button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={refreshPage}> Another Player </button>
                <br></br>
                <br></br>
            </form>
            <div>{feedback}</div>
            <br></br>
            <div>
                <button onClick={getMoreInfo}> Toggle player info </button>
            </div>
            {isHidden &&
                (
                    <whpf>
                        <div>#{moreInfo.leagues.standard.jersey} </div>
                        <div>{rndPlayer.height_feet}-{rndPlayer.height_inches}, {rndPlayer.weight_pounds}lbs ({moreInfo.height.meters}m, {moreInfo.weight.kilograms}kgs)</div>
                        <div>DOB: {moreInfo.birth.date} </div>
                        <div>College: {moreInfo.affiliation} </div>
                        <div>Debuted: {moreInfo.nba.start} </div>
                        <div>Seasons Pro: {moreInfo.nba.pro} </div>
                    </whpf>
                )
            }
            <br></br>
        </div>
    );

}

export default WhpfPage;