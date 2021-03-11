import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Team.css'

const Team = ({ team }) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = team;
    
    return (
        <div className="col">
            <div className="card shadow border-0 team-card">
                <img src={strTeamBadge} className="img-fluid p-5" alt="badge"/>
                <div className="card-body text-center">
                    <h4 className="card-title">{strTeam}</h4>
                    <p className="card-text">Sports type: {strSport}</p>
                    <Link to={`/teams/${ idTeam }`} className="btn btn-primary main-btn">Explore<FontAwesomeIcon className="ms-2" icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Team;