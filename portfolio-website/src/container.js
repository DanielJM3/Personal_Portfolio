function Container() {
  return ( 
    <body>
      <div id="content">
        <Hero />
        <Seperator />
        <Skills />
        <Seperator />
      </div>
    </body>
    );
}
//Hero should go in a seperate file
function Hero() {
  return (
    <div id="hero">
          <div id="desktop-header">
                <div id="title">
                  <h3>DJM Web Solutions</h3>
                </div>
                <div id="navigation"> <a>Portfolio</a> <a>Resume</a> <a>About</a> <a>Contact</a> </div>
                <div id="socials"> <img src="../Instagram off-grey.png" width="auto" height="30" alt=""/> <img src="images/Twitter white.png" width="auto" height="30" alt=""/> <img src="images/linkedin white.png" width="auto" height="30" alt=""/> </div>
              </div>
              <div id="name-image-container">
                <div id="profile-img">
                  <div className="img-placholder"></div>
                </div>
                <div id="name-container">
                  <p className="location"><img src="images/location_icon.png" width="30" height="auto" alt=""/>Indiana, United States</p>
                  <span className="name">Daniel Mendoza</span> <span className="title">Full Stack Web Developer</span>
                  <p>I am a full stack web developer based out of the United States. Although I have a degree in computer animation and game development I decided to use the recent COVID-19 pandemic to explore a career in web development and programming.</p>
                  <div className="hero-btns">
                    <button>Resume</button>
                    <button>Daniel@djmweb.com</button>
                  </div>
                </div>
              </div>
        </div>
    );
}

function Skills() {
  return(
    <div className="skills-container">
        <h2>Skills</h2>
        <ul id="skills-grid">
          <Skill title="HTML5" color="blue" image-url="sample" subskill1="HTML best practices" subskill2="Bootstrap Framework" subskill3="SEO" subskill4="" />
          <Skill title="CSS3" color="pink" image-url="sample" subskill1="Responsive Web Design" subskill2="Grid and Flexbot" subskill3="CSS Animations" subskill4="" />
          <Skill title="JAVASCRIPT" color="blue" image-url="sample" subskill1="React Framework" subskill2="OOP" subskill3="JS Animations" subskill4="Fetch API" />
          <Skill title="PYTHON" color="pink" mage-url="sample" subskill1="Flask Framework" subskill2="OOP" subskill3="SQL Databases" subskill4="Data Visualization" />
          <Skill title="REACT" color="pink" image-url="sample" subskill1="Hooks" subskill2="" subskill3="" subskill4="" />
          <Skill title="FLASK" color="blue" image-url="sample" subskill1="Data Storage" subskill2="Form Processing" subskill3="User Management" subskill4="" />
          <Skill title="GIT" color="pink" image-url="sample" subskill1="GIT Best Practices" subskill2="Github" subskill3="Branches" subskill4="" />
          <Skill title="LINUX" color="blue" image-url="sample" subskill1="Ubuntu Web Servers" subskill2="Nginx" subskill3="Gunicorn" subskill4="" />
        </ul>
      </div>
    );
}

function Skill(props) {
  return(
    <li className="skill">
      <div className="skill-asset blue">
        <div className="flip-inner">
          <div className="flip-front">
            <p>{ props.title }</p>
            <img src="{ props.image-url }" width="150px" height="auto" alt=""/> </div>
          <div className="flip-back">
            <p>Subskills</p>
      <HorizontalLine color={props.color} />
      <ul className="subskills">
        <li>{ props.subskill1 }</li>
        <li>{ props.subskill2}</li>
        <li>{ props.subskill3}</li>
        <li>{ props.subskill4}</li>
      </ul>
          </div>
        </div>
      </div>
    </li>
    );
}

function Portfolio() {
  return(
    <div id="portfolio-container">
        <h2>MY WORK</h2>
        <div class="personal-project-container">
          <div class="project">
            <h4>Coffee Shop</h4>
            <div class="project-split">
              <div class="project-links">
            <img src="images/generic-logo.png" width="100%" height="auto" alt=""/>
            <button class="project-btn">Go To Site</button>
              <button class="project-btn">Project Write Up</button>
              <button class="project-btn">Github</button>
          </div>
              <div class="project-description">
            <h5>Project Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Important skills aquired</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="project-stack-container">
                <img src="images/html_retrowave_glitched.png" alt=""/> 
            <img src="images/CSS_retrowave_glitched.png" alt=""/>
            <img src="images/flask_retrowave.png" alt=""/>
            <img src="images/react_retrowave.png" alt=""/>
            <img src="images/python_retrowave.png" alt=""/>
            <img src="images/js_retrowave_glitched.png" alt=""/>
              <img src="images/git_retrowave_glitched.png" alt=""/>
            </div>
          </div>
            </div>
          </div>
        <br></br>
          <div class="project">
            <h4>Wildlife Foundation</h4>
          <div class="project-split">
              <div class="project-links">
            <img src="images/generic-logo.png" width="100%" height="auto" alt=""/>
            <button class="project-btn">Go To Site</button>
              <button class="project-btn">Project Write Up</button>
              <button class="project-btn">Github</button>
          </div>
              <div class="project-description">
            <h5>Project Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Important skills aquired</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="project-stack-container">
                <img src="images/html_retrowave_glitched.png" alt=""/> 
            <img src="images/CSS_retrowave_glitched.png" alt=""/>
            <img src="images/flask_retrowave.png" alt=""/>
            <img src="images/react_retrowave.png" alt=""/>
            <img src="images/python_retrowave.png" alt=""/>
            <img src="images/js_retrowave_glitched.png" alt=""/>
              <img src="images/git_retrowave_glitched.png" alt=""/>
            </div>
          </div>
            </div>
          </div>
        <br></br>
          <div class="project">
            <h4>Habit Tracker</h4>
          <div class="project-split">
              <div class="project-links">
            <img src="images/generic-logo.png" width="100%" height="auto" alt=""/>
            <button class="project-btn">Go To Site</button>
              <button class="project-btn">Project Write Up</button>
              <button class="project-btn">Github</button>
          </div>
              <div class="project-description">
            <h5>Project Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Important skills aquired</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="project-stack-container">
                <img src="images/html_retrowave_glitched.png" alt=""/> 
            <img src="images/CSS_retrowave_glitched.png" alt=""/>
            <img src="images/flask_retrowave.png" alt=""/>
            <img src="images/react_retrowave.png" alt=""/>
            <img src="images/python_retrowave.png" alt=""/>
            <img src="images/js_retrowave_glitched.png" alt=""/>
              <img src="images/git_retrowave_glitched.png" alt=""/>
            </div>
          </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="work-grid">
          <div class="project"></div>
        </div>
      </div>
    );
}

function Project(props) {
  return (
    <div class="project">
      <h4>{ props.name }</h4>
      <div class="project-split">
        <div class="project-links">
      <img src="images/generic-logo.png" width="100%" height="auto" alt=""/>
      <button class="project-btn">Go To Site</button>
        <button class="project-btn">Project Write Up</button>
        <button class="project-btn">Github</button>
    </div>
        <div class="project-description">
      <h5>Project Description</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h5>Important skills aquired</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div class="project-stack-container">
          <img src="images/html_retrowave_glitched.png" alt=""/> 
      <img src="images/CSS_retrowave_glitched.png" alt=""/>
      <img src="images/flask_retrowave.png" alt=""/>
      <img src="images/react_retrowave.png" alt=""/>
      <img src="images/python_retrowave.png" alt=""/>
      <img src="images/js_retrowave_glitched.png" alt=""/>
        <img src="images/git_retrowave_glitched.png" alt=""/>
      </div>
    </div>
      </div>
    </div>
    );
}
//this will go into individual components section
function Seperator() {
  return(
    <br className="section-seperator"></br>
    );
}

function HorizontalLine(props) {
  return(
    <hr className="{ props.color }"></hr>
    );
}

export default Container;
