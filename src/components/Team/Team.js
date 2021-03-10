import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({ team }) => {
    console.log(team);
    const { strTeam, strSport, strTeamBadge, idTeam } = team;
    return (
        <div className="col">
            <div className="card">
                <img src={strTeamBadge} className="p-5" alt="badge"/>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <Link to={`/teams/${ idTeam }`} className="btn btn-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Team;