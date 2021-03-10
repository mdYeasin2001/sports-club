import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <a className="navbar-brand fs-2 fw-bold" href="/">Sports<span style={{color: '#d63031'}}>Club</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 fw-bold">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;