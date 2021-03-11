import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeams(data.teams))
            .catch(error => error);
    }, [])
    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {teams.map(team => <Team key={team.idTeam} team={team} />)}
                </div>
            </div>
        </div>
    );
};

export default Teams;