import HorizontalLine from 'components/hz.js';

import html from 'assets/html_retrowave_glitched.png';
import css from 'assets/CSS_retrowave_glitched.png';
import js from 'assets/js_retrowave_glitched.png';
import python from 'assets/python_retrowave.png';
import react_icon from 'assets/react_retrowave.png';
import flask from 'assets/flask_retrowave.png';
import git from 'assets/git_retrowave_glitched.png';

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

export default Skills;