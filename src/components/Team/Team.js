import React from 'react';

const Team = ({ team }) => {
    console.log(team);
    const { strTeam, strSport, strTeamBadge } = team;
    return (
        <div className="col">
            <div className="card">
                <img src={strTeamBadge} className="p-5" alt="badge"/>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Team;