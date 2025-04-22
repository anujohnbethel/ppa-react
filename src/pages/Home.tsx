import logo from '../assets/images/logo.png'; // adjust path based on your file location
// import '../js/main.js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const primaryHeader = document.querySelector(".primary-header");
        const navToggle = document.querySelector(".mobile-nav-toggle");
        const primaryNav = document.querySelector(".primary-navigation");
    
        console.log(primaryHeader, navToggle, primaryNav); // Check if elements are found
    
        if (!primaryHeader || !navToggle || !primaryNav) return;
    
        const handleNavToggle = () => {
            const isVisible = primaryNav.hasAttribute("data-visible");
    
            // Toggle the attributes and show alert with the new state
            navToggle.setAttribute("aria-expanded", (!isVisible).toString());
            primaryNav.toggleAttribute("data-visible");
            primaryHeader.toggleAttribute("data-overlay");
    
            // Alert showing visibility state
            // alert((!isVisible).toString());
        };
    
        // Attach the event listener
        navToggle.addEventListener("click", handleNavToggle);
    
        // Cleanup to remove the event listener on component unmount or re-render
        return () => {
            navToggle.removeEventListener("click", handleNavToggle);
        };
    }, []);
    

    return  <div className="container">
    <header  className="primary-header">  
        
            <div className="logo-italic">            
                <a href="#"><img src={logo} alt="Logo image of Peniel Pentecostal Assembly Church"/>
                </a>
                <div className="name" aria-hidden="true" ><p><span>P</span>eniel</p><p><span>P</span>entecostal</p><p><span>A</span>ssembly</p></div>
              </div>
      
              
                <button className="hamburger-menu mobile-nav-toggle"  aria-controls="primary-navigation" aria-expanded="false">
                  <div className="line line-1" aria-hidden="true"></div>
                  <div className="line line-2" aria-hidden="true"></div>
                  <div className="line line-3" aria-hidden="true"></div>
                  <span className="visually-hidden">Menu</span>
                </button>
              
      
              <nav  className="primary-navigation" id="primary-navigation">
                <ul aria-label="Primary" role="list" className="nav-list">
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/ministries">Ministries</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/donation">Donation</Link></li>
                </ul>
      
              </nav>
           

      
     
        </header>
    </div> 

  };
  
  export default Home;