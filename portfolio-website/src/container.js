import Hero from 'pages/Index/hero/hero.js';
import Skills from 'pages/Index/skills/skills.js';
import Portfolio from 'pages/Index/portfolio/portfolio.js';
import About from 'pages/Index/about/about.js';
import Seperator from 'components/Seperator.js';
import Contact from 'pages/Index/contact/contact.js';
import Footer from 'pages/Index/footer/footer.js';


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
        <Footer />
      </div>
    </body>
    );
}

export default Container;
