

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Adjust this value based on when you want the background to appear
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <strong>J&D</strong> {/* Replace this with your logo image if available */}
            </div>
            <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <li className="dropdown">
                Careers
                    <ul className="dropdown-content">
                        <li>LPN</li>
                        <li>RN</li>
                        <li>CNA</li>
                        <li>HHA</li>
                    </ul>
                </li>
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Contact Us</li>
            </ul>
            <button className="get-in-touch">GET IN TOUCH</button>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'} {/* Unicode characters for menu and close icons */}
            </div>
        </nav>
    );
};

export default Navbar;
