import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-white text-center py-4">
            <div className="container">
                <div className="social-links d-flex justify-content-center mb-3">
                    <Link href="https://github.com/taufiqpop" target="_blank" rel="noopener noreferrer" className="bi bi-github mx-2"></Link>
                    <Link href="https://discord.gg/CKXCwBZr72" target="_blank" rel="noopener noreferrer" className="bi bi-discord mx-2"></Link>
                    <Link href="https://open.spotify.com/show/66lFgL2DzwXQQORXKkvsf4" target="_blank" rel="noopener noreferrer" className="bi bi-spotify mx-2"></Link>
                    <Link href="https://tiktok.com/@taufiqpop99" target="_blank" rel="noopener noreferrer" className="bi bi-tiktok mx-2"></Link>
                    <Link href="https://instagram.com/taufiqpop99" target="_blank" rel="noopener noreferrer" className="bi bi-instagram mx-2"></Link>
                    <Link href="https://www.youtube.com/@Taufiq_Pop?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bi bi-youtube mx-2"></Link>
                </div>
                <div className="text-center">
                    <p>2024 &copy; Taufiq Pop</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
