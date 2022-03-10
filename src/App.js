import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Animation from './components/Animation';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Animation />
      <Navbar />

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Kevin
              <span className="text-primary">Aboy</span>
            </h1>
            <div className="subheading mb-5">
              <a href="mailto:kaboy@icloud.com">kaboy@icloud.com</a>
            </div>
            <p className="lead mb-5">I am a Front-End Developer at Apple with over 12 years experience within Apple. My journey involves leading teams, managing projects, developing websites, solving technical issues for customers, and working with our engineers to make the best products possible.<br /><br />About two years ago, around the time I hit my 10 years with Apple, I enrolled and completed the Project Management Certificate Program at UT Austin. I had so much fun in that course that I decided to enrol in a coding bootcamp last summer. I am proud to share that I recently graduated from the Full Stack Web Developer Coding Boot Camp at UT Austin. While this brings a close to a wonderful experience, I know the journey has only begun.</p>
            <a href="https://app.box.com/s/26ip056beb2pie3ybhhsa2ykipib843z" class="btn btn-primary btn-md text-white" role="button">View resume</a>
            <br />
            <br />
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/kevinaboy"><i
                className="fab fa-linkedin-in"></i></a>
              <a className="social-icon" href="https://github.com/kevinaboy"><i className="fab fa-github"></i></a>
              {/*
        <!-- <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a> --> */}
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Front-End Developer</h3>
                <div className="subheading mb-3">Apple</div>
                <p>Develops and maintains rich user experiences for internal websites serving Apple Recruiters.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">November 2021 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Business Impact and Communications Lead</h3>
                <div className="subheading mb-3">AsianPacific@Apple</div>
                <p>Maintains internal website, develops comms, and leads events for Apple's Diversity Network Association,
                  AsianPacific@Apple.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">November 2020 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Creative Media Senior Advisor</h3>
                <div className="subheading mb-3">AppleCare</div>
                <p>Provided technical supports to customers using Apple-developed consumer and professional applications
                  such as Photos, iMovie, and Final Cut Pro. Leadership Academy Graduate and
                  AppleCare Mentor.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2017 - October 2021</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Content Specialist Rotation</h3>
                <div className="subheading mb-3">AppleCare</div>
                <p>Wrote standard operating procedures used by AppleCare Advisors worldwide. Used HTML and WYSIWYG editor to
                  make internal websites and emails.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Texas at Austin</h3>
                <div className="subheading mb-3">Coding Boot Camp Certificate Program</div>
                <div>Roles: Project Lead, Designer, Developer</div>
                <p>HTML, CSS, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, GraphQL, Command Line, Git, and
                  GitHub.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2021 - March 2022</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0"></h3>
                <div className="subheading mb-3">Project Management Certificate Program</div>
                <div>Role: Senior Project Manager</div>
                <p>Led a team of project managers in the completion of a 140+ page real estate project plan. Applied project
                  management principles, theories, and practices, including the basic concepts described in <em>A Guide to
                    the Project Management Body of Knowledge</em> (PMBOK® Guide) - Sixth Edition.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">May 2019 - August 2019</span></div>
            </div>
          </div>

        </section>
        <hr className="m-0" />

        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                  <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                  <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                  <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                  {/*
            <!-- <li className="list-inline-item"><i className="fab fa-angular"></i></li> --> */}
                  <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                  <li className="list-inline-item"><i className="fab fa-react"></i></li>
                </ul>
                {/*
          <!-- <h3 className="mb-0">University of Texas at Austin</h3> --> */}
                <div className="subheading mb-3">Certificates and Apps</div>
                <div>Final Cut Pro and iWork</div>
                <p>Box, Sketch, Slack, Quip, Wrike</p>
                {/*
          <!-- <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Agile Development & Scrum
          </li>
        </ul> --> */}
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <Portfolio />

      </div >
      <ContactForm />
      <Footer />
    </>

  );
}

export default App;
