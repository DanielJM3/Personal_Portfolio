import html from 'assets/html_retrowave_glitched.png';
import css from 'assets/CSS_retrowave_glitched.png';
import js from 'assets/js_retrowave_glitched.png';
import python from 'assets/python_retrowave.png';
import react_icon from 'assets/react_retrowave.png';
import flask from 'assets/flask_retrowave.png';
import git from 'assets/git_retrowave_glitched.png';
import generic_logo from 'assets/generic-logo.png';

function Portfolio() {
  return(
    <div id="portfolio-container">
        <h2>MY WORK</h2>
        <div class="personal-project-container">
          <Project name="Coffee Shop"/>
        <br></br>
          <Project name="Life Dashboard"/>
        <br></br>
          <Project name="Wildlife Tracker"/>
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
          <img src= {html} alt=""/> 
      <img src={css} alt=""/>
      <img src={js} alt=""/>
      <img src={react_icon} alt=""/>
      <img src={python} alt=""/>
      <img src={flask} alt=""/>
        <img src={git} alt=""/>
      </div>
    </div>
      </div>
    </div>
    );
}

export default Portfolio;