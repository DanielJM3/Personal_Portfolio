import {useState, useEffect} from 'react';

import {DesktopNav, MobileNav} from 'pages/Index/hero/components/nav.js';

import location_icon from 'assets/location_icon.png';



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



export default Hero;