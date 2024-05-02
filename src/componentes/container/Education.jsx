import React from 'react';
import Vf from '../../resources//profile/logos/VF.png';
import Coffee from '../../resources/profile/logos/coffee-cup.png';

const Education = () => {
    return (
        <div>
            <section className="education" id="education">
  <h2 className="eading">
    My <span>Journey</span>
  </h2>
  <div className="education-row">
    <div className="education-column">
      <h3 className="tittle">Education</h3>
      <div className="education-box">
        <div className="education-content">
          <div className="content">
            <div className="year">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>
              <p className="date">2019 - 2020</p>
              <h3>Forntend Web Developer - Udemy</h3>
              <p>
              In the course I learned HTML, CSS3, JavaScript, SASS from the hand of
                expert mentors in web and application development
                entrepreneurs with more than 20 years of work experience and more than
                10 years teaching online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="education-column">
      <h3 className="tittle">Experience</h3>
      <div className="education-box">
        <div className="education-content">
          <div className="content">
            <div className="year">
              <section className="card">
                <a href="https://foodvegan.netlify.app" target="_blank" rel='noreferrer'>
                  <div className="background">
                    <img src={ Vf } alt='' />
                  </div>
                  <div className="content2">
                    <h2>
                      Vegan<span>Food</span>
                    </h2>
                    <ul className="clips">
                      <li className="clip">HTML</li>
                      <li className="clip">SASS</li>
                      <li className="clip">JS</li>
                      <li className="clip">SQL</li>
                    </ul>
                  </div>
                </a>
              </section>
            </div>
          </div>
          <div className="content">
            <div className="year">
              <section className="card">
                <a href="https://cafesperanza.netlify.app" rel='noreferrer' target="_blank">
                  <div className="background">
                    <img src={ Coffee } alt='' />
                  </div>
                  <div className="content">
                    <h2>Blog de Cafe</h2>
                    <ul className="clips">
                      <li className="clip">HTML</li>
                      <li className="clip">CSS</li>
                      <li className="clip">JS</li>
                    </ul>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}

export default Education;
