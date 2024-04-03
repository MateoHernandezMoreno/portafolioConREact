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
                    Soy una persona responsable, puntual, proactiva y respetuosa, con
                    capacidad para adaptarme a las situaciones que se puedan generar, me gusta
                    trabajar en equipo y aprender cada dia mas.
                    </p>
                    {/* <div class="btn-box btns">
                        <a href="#" class="btn">Read More</a>
                    </div> */}
                </div>
            </section>

        </div>
    );
}

export default Aboutme;
