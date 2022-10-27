function Home(){

    const scheduleKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b4a431490bmsh7ccab2b032763d3p18e9acjsnbf25af2a7eeb',
            'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com'
        }
    };
    
    fetch('https://nfl-schedule.p.rapidapi.com/v1/schedules', scheduleKey)
        .then(response => response.json())
        .then(response => console.log("schedule:", response))
        .catch(err => console.error(err));


        
        fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32')
            .then(response => response.json())
            .then(response => console.log("athletes", response))
            .catch(err => console.error(err));



    return(
        <div className="page">
            <h1>Home</h1>
        </div>
    )
}

export default Home;