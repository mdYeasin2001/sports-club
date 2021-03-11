import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import groupPhotoMale from '../../images/male.png';
import groupPhotoFemale from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faMars, faFutbol, faClock } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState({});
    const { strTeamBanner, strTeam, strSport, strGender, intFormedYear, strDescriptionEN, strStadiumDescription, strFacebook, strInstagram, strTwitter, strYoutube, strCountry } = team;
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
            <div className="bg-light text-dark">
                <div className="container p-3">
                    <div className="card mb-3 team-detail-card p-1" >
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body ms-5 text-white">
                                    <h2 className="card-title">{strTeam}</h2>
                                    <ul className="card-text list-unstyled fs-5">
                                        <li><FontAwesomeIcon className="me-1" icon={faClock} />Founded: {intFormedYear}</li>
                                        <li><FontAwesomeIcon className="me-1" icon={faFlag} />Country: {strCountry}</li>
                                        <li><FontAwesomeIcon className="me-1" icon={faFutbol} />Sport type: {strSport}</li>
                                        <li><FontAwesomeIcon className="me-1" icon={faMars} />Gender: {strGender}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {strGender && (strGender === 'Male' ? <img className="img-fluid" src={groupPhotoMale} alt="team" /> : <img className="img-fluid" src={groupPhotoFemale} alt="team" />)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="lead">{strDescriptionEN}</p>
                        <p className="lead">{strStadiumDescription}</p>
                    </div>
                    <div className="text-center">
                        <a className="icon twitter-icon" href={`https://${strTwitter}`} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="icon facebook-icon" href={`https://${strFacebook}`} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="icon instagram-icon" href={`https://${strInstagram}`} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="icon youtube-icon" href={`https://${strYoutube}`} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;