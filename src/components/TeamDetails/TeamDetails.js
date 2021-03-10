import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import groupPhotoMale from '../../images/male.png';
import groupPhotoFemale from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faMars, faFutbol, faClock } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({});
    const { strTeamBanner, strTeam, strSport, strGender, intFormedYear, strDescriptionEN, strStadiumDescription, strFacebook, strInstagram, strTwitter, strYoutube, strCountry } = team;
    console.log(team);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(response => response.json())
            .then(data => setTeam(...data.teams))
            .catch(error => error);
    }, [idTeam])
    return (
        <>
            <div className="teamBanner">
                <img src={strTeamBanner} alt="team-banner" />
            </div>
            <div className="container">
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">{strTeam}</h3>
                                <ul className="card-text list-unstyled">
                                    <li><FontAwesomeIcon icon={faClock} />Founded: {intFormedYear}</li>
                                    <li><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</li>
                                    <li><FontAwesomeIcon icon={faFutbol} />Sport type: {strSport}</li>
                                    <li><FontAwesomeIcon icon={faMars} />Gender: {strGender}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            {strGender.toLowerCase() === 'male' ? <img className="img-fluid" src={groupPhotoMale} alt="team" /> : <img className="img-fluid" src={groupPhotoFemale} alt="team" />}
                        </div>
                    </div>
                </div>
                <div>
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="social-links">
                    <a href={strTwitter}><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                    <a href={strFacebook}><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                    <a href={strInstagram}><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                    <a href={strYoutube}><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                    
                    
                    
                </div>
            </div>
        </>
    );
};

export default TeamDetails;