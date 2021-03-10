import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-muted py-3 text-center">
            <p className="m-0">© Copyright {new Date().getFullYear()} SportsClub, All Right Reserved</p>
        </footer>
    );
};

export default Footer;