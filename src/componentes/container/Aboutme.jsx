import React from 'react';
import Profile from '../../resources/profile/profile-removebg-preview-removebg-preview.png';

const Aboutme = () => {
    return (
        <div>
            <section className="about" id="about">
                <h3 className="heading">
                    About <span>Me</span>
                </h3>
                <div className="abuot-img">
                    <img
                    src={ Profile }
                    alt=""
                    />
                    <span className="circle-spin" />
                </div>
                <div className="loader" />
                <div className="about-content">
                    <h3>Fontend Developer</h3>
                    <p>
                    I am a responsible, punctual, 
                    proactive and respectful person, 
                    with the ability to adapt to situations 
                    that may arise, I like to work as a 
                    team and learn more every day.
                    </p>
                </div>
            </section>

        </div>
    );
}

export default Aboutme;
