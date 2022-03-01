import {useEffect} from 'react';
import $ from 'jquery';

import linkedin_white from 'assets/linkedin_white.png';
import twitter_white from 'assets/Twitter_white.png';

function DesktopNav() {
  return (
      <div id="desktop-header">
        <div id="title">
          <h3>DJM Web Solutions</h3>
        </div>
        <NavItems nav="navigation" />
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
          <NavItems nav="menu-items" />
          <h1 class="logo">DJM</h1>
      </div>
  </nav>
    );
}

function NavItems(props) {
  //smooth scroll nav
  useEffect(() => {
    $("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop:        $("#portfolio-container").offset().top
           }, 800);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body').animate({
               scrollTop:        $("#two").offset().top
           }, 900);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body').animate({
               scrollTop:        $("#about-container").offset().top
           }, 900);
        return false;
       });
      
      $("#sec-4").click(function() {
           $('html,body ').animate({
               scrollTop:        $("#contact-container").offset().top
           }, 900);
        return false;
       });
  })
  return (
    <div className={props.nav}>
      <a id="sec-1" href="#portfolio-container">Portfolio</a>
      <a id="sec-2" href="#resume">Resume</a>
      <a id="sec-3" href="about-container">About</a>
      <a id="sec-4" href="contact-container">Contact</a>
    </div>
    
    );
}

export {DesktopNav, MobileNav};