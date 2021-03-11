import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner container-fluid">
            <div className="col-md-6 text-white">
                <h1 className=" fw-bolder display-4">Welcome To Sports Club</h1>
                <p className="lead">Don't walk through life just playing football. Don't walk through life just being an athlete. Athletics will fade. Character and integrity and really making an impact on someone's life, that's the ultimate vision, that's the ultimate goal - bottom line</p>
                <button className="btn btn-secondary main-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;