import {useState, useEffect, useCallback} from 'react';
import html from './assets/html_retrowave_glitched.png';
import css from './assets/CSS_retrowave_glitched.png';
import js from './assets/js_retrowave_glitched.png';
import python from './assets/python_retrowave.png';
import react_icon from './assets/react_retrowave.png';
import flask from './assets/flask_retrowave.png';
import git from './assets/git_retrowave_glitched.png';
import generic_logo from './assets/generic-logo.png';
import location_icon from './assets/location_icon.png';
import linkedin_white from './assets/linkedin_white.png';
import twitter_white from './assets/Twitter_white.png';


function Container() {
  return ( 
    <body>
      <div id="content">
        <Hero />
        <Seperator />
        <Skills />
        <Seperator />
        <Portfolio />
        <About />
        <Seperator />
        <Contact />
      </div>
    </body>
    );
}
//Hero should go in a seperate file
function Hero() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions ({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div id="hero">
              {window.innerWidth > 1200 ? <DesktopNav /> : <MobileNav />}
              <div id="name-image-container">
                <div id="profile-img">
                  <div className="img-placholder"></div>
                </div>
                <div id="name-container">
                  <p className="location"><img src={location_icon} width="30" height="auto" alt=""/>Indiana, United States</p>
                  <p className="name">Daniel Mendoza</p> <p className="title">Full Stack Web Developer</p>
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

function DesktopNav() {
  return (
      <div id="desktop-header">
        <div id="title">
          <h3>DJM Web Solutions</h3>
        </div>
        <div id="navigation"> <a>Portfolio</a> <a>Resume</a> <a>About</a> <a>Contact</a> </div>
        <div id="socials"> <img src="../Instagram off-grey.png" width="auto" height="30" alt=""/> <img src={twitter_white} width="auto" height="30" alt=""/> <img src={linkedin_white} width="auto" height="30" alt=""/> </div>
      </div>
    );
}

function MobileNav() {
  return (
      <nav class="navbar">
      <div class="navbar-container">
          <input type="checkbox" name="" id=""></input>
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
          <ul class="menu-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#food">Category</a></li>
              <li><a href="#food-menu">Menu</a></li>
              <li><a href="#testimonials">Testimonial</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
          <h1 class="logo">RS</h1>
      </div>
  </nav>
    );
}

function Skills() {
  return(
    <div className="skills-container">
        <h2>Skills</h2>
        <ul id="skills-grid">
          <Skill title="HTML5" color="blue" imageurl={html} subskill1="HTML best practices" subskill2="Bootstrap Framework" subskill3="SEO" subskill4="" />
          <Skill title="CSS3" color="pink" imageurl={css} subskill1="Responsive Web Design" subskill2="Grid and Flexbot" subskill3="CSS Animations" subskill4="" />
          <Skill title="JS" color="blue" imageurl={js} subskill1="React Framework" subskill2="OOP" subskill3="JS Animations" subskill4="Fetch API" />
          <Skill title="PYTHON" color="pink" imageurl={python} subskill1="Flask Framework" subskill2="OOP" subskill3="SQL Databases" subskill4="Data Visualization" />
          <Skill title="REACT" color="pink" imageurl={react_icon} subskill1="Hooks" subskill2="" subskill3="" subskill4="" />
          <Skill title="FLASK" color="blue" imageurl={flask} subskill1="Data Storage" subskill2="Form Processing" subskill3="User Management" subskill4="" />
          <Skill title="GIT" color="pink" imageurl={git} subskill1="GIT Best Practices" subskill2="Github" subskill3="Branches" subskill4="" />
          <Skill title="LINUX" color="blue" imageurl={html} subskill1="Ubuntu Web Servers" subskill2="Nginx" subskill3="Gunicorn" subskill4="" />
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
            <img src={ props.imageurl } width="150px" height="auto" alt=""/> </div>
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
          <Project />
        <br></br>
          <Project />
        <br></br>
          <Project />
        <br></br>
        <div class="work-grid">
          <div class="project"></div>
        </div>
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
      <img src={generic_logo} width="100%" height="auto" alt=""/>
      <button class="project-btn">Go To Site</button>
        <button class="project-btn">Project Write Up</button>
        <button class="project-btn">Github</button>
    </div>
        <div class="project-description">
      <h5>Project Description</h5>
      <p>{ props.description }</p>
      <h5>Important skills aquired</h5>
      <p>{ props.skills_aquired }</p>
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

function About() {
  return (
    <div id="about-container">
    <h2>About Myself</h2>
    <div id="about-split">
      <div id="about-text">
        <p>Hi, my name is Daniel Mendoza and I am a full stack web developer eager to grow my career in the industry. My path into web development was not the traditional one however I do feel it is a path that a lot of people would be able to relate to. If you took a look at my resume already you would notice that I have a batchelors degree in game development and not web development.</p>
        <p>I was one of those students that didn't end up enjoying what they went to school for but had spent to much time and money on it that they felt it was necessary to follow through. Ironically, when I graduated the world get hit by a global pandemic making finding a job near impossible in an indusry that was already hard to get a foot in the door. After fielding rejection letters for 6 months I took it as a sign to spend the rest of the lockdowns pursuing a career in something I enjoyed more.</p>
        <p>I had taken web development courses as electives in university as well as had a good programming foundation from working on videogames. I decided to take this foundation and try to make my way into the web development indusry instead of game.</p>
        <p>I moved to Indiana to help take care of my elderly grandmother before I had other obligations preventing me from doing so.</p>
      </div>
      <div id="about-img">
        
      </div>
    </div>
  </div>
    );
}

function Contact() {
  return(
    <div id="contact-container">
    <h2>Contact</h2>
    <form id="contact-form">
      <div class="form-row">
        <input placeholder="Full Name" type="text" id="name" name="name" class="col"></input>
        <input placeholder="Email Address" type="text" id="email" name="email" class="col"></input>
        <input placeholder="Buisness Name" type="text" id="buisness" name="buisness" class="col"></input>
      </div>
      <div class="form-row">
        <textarea placeholder="How can I help you?" class="col"></textarea>
      </div>
      <div class="form-row">
        <button class="submit-btn">Submit</button>
      </div>
    </form>
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
