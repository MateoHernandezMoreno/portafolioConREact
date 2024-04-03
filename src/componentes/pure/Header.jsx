import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
        <div className="nav_logo"> Mateo </div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <a href="#inicio"> INICIO</a>
            <a href="#about">ABOUT ME</a>
            <a href="#education"> EDUCATION</a>
            <a href="#skill"> SKILLS</a>
            <a href='#contact'>CONTACT</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    );
}

export default Header;

