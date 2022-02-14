import React from 'react';

import runBuddyImg from '../assets/img/run_buddy.jpg';



function Portfolio(props) {
  return (
    <>
      <section className="resume-section" id="portfolio">
        <div className="resume-section-content">
          {/*
      <!-- <h2 className="mb-5">Portfolio</h2> -->
      <!-- <p>Coming soon...</p> --> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card" >
                  <img className="card-img-top" src={runBuddyImg} alt="Run Buddy Home Page" />
                  <div className="card-body">
                    <h5 className="card-title">Run Buddy</h5>
                    <p className="card-text">Created a landing page for Run Buddy, a service that lets runners sign up for
                      personal training using HTML5 and CSS3. Managed code using a popular version control system called
                      Git. The websites on this page were deployed using GitHub Pages.</p>
                    <a href="https://kevinaboy.github.io/run-buddy/" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/kevinaboy/run-buddy" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;