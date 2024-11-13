import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
        <div className="nav_logo"> Quimbaya </div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <a href="#inicio"> INICIO</a>
            <a href="#about">ABOUT US</a>
            <a href="#education"> EDUCATION</a>
            <a href="#skill"> SKILLS</a>
            <a href='#contact'>RESERVATONS</a>
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

