// import logo from '../assets/images/logo.png'; // adjust path based on your file location
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
                <a href="#"><img src='/images/logo.png' alt="Logo image of Peniel Pentecostal Assembly Church"/>
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
        <main role="main">
            <section className="special-event-container | grid-group">
                <div className="brocher">
                    <img src="/images/PPA-photos/PPA church 2023.JPG" alt=""/>
                    <h1 >A Christian community in the Pentecostal Experience, celebrating together our life as the people of the living God.</h1>
                </div>
                
            </section>
            
            

        <section className="service | flow ">
                
            
                <div className="service-cta">   
                    
                    <h2 className='odd-para-translate-x para-vertical-filler'>Join Us for a Spirit-Filled Multilingual Worship Experience</h2>
                    
                    <p>
                        Join our vibrant faith community in Beaumont for uplifting, 
                        Spirit-filled worship that brings people of all cultures together. 
                        Our multilingual services offer a welcoming space to grow in faith and
                        connect with others.
                    </p>
                    <p>
                        In Edmonton, we provide Sunday worship services in English, Malayalam, Punjabi,
                        Hindi and Tamil, so you can experience God’s love in your native language.
                    </p>
                    <p>Newcomers are always welcome. Visit us this Sunday to encounter heartfelt
                        worship, biblical teaching, and a community that feels like home.
                    </p>
                </div>
                <div className="multilingual-worship">
                    <img src="/images/PPA-photos/Pr Biju-m-r.jpg" alt="multilingual worship" />

                    
                    <h2>MULTILINGUAL WORSHIP</h2>
                    
                    <div>
                        <p><i className="fa-solid fa-location-dot"></i>Peniel Pentecostal Assembly
                            <span className="address">2015 41 Ave Sw Edmonton AB T6X2 T4.</span>
                        </p>
                        <p><i className="fa-solid fa-clock"></i>Every Sunday 10.30 A.M</p>
                    </div>
                </div>

                <div className="hindi-worship">
                    <img src="/images/PPA-photos/BBQ worship2_r_m.jpg" alt="hindi worship" />

                    
                    <h2>PUNJABI/HINDI WORSHIP</h2>
                    
                    <div>
                        <p><i className="fa-solid fa-location-dot"></i>Peniel Pentecostal Assembly
                            <span className="address">2015 41 Ave Sw Edmonton AB T6X2 T4.</span>
                        </p>
                        <p><i className="fa-solid fa-clock"></i>Every Sunday 8.30 A.M</p>
                    </div>
                </div>

                
                <div className="sunday-school">
                    <img src="/images/PPA-photos/vbs20231.JPG" alt="Sunday school" />

                    
                    <h2>SUNDAY SCHOOL</h2>
                    
                    <div>
                        <p><i className="fa-solid fa-location-dot"></i>Peniel Pentecostal Assembly
                            <span className="address">2015 41 Ave Sw Edmonton AB T6X2 T4.</span>
                        </p>
                        <p><i className="fa-solid fa-clock"></i>Every Sunday 8.45 A.M</p>
                    </div>
                </div>


    </section>


        
        </main>
        <footer className="footer-section mt-5" >
        <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="logo-italic-footer">            
                                <a href="#"><img src='/images/logo.png' alt="Logo image of Peniel Pentecostal Assembly Church"/>
                                </a>
                                <div className="name" aria-hidden="true" ><p><span>P</span>eniel</p><p><span>P</span>entecostal</p><p><span>A</span>ssembly</p></div>
                              </div>
                            <div className="footer-text">
                                <p>Welcome to Peniel Pentecostal Assembly, Edmonton. We have worship separate worship services in Malayalam, Hindi/Punjabi, Tamil, English. A Christian community in the Pentecostal Experience, celebrating together our life as the people of the living God.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul role="list">
                                <li><a  asp-area="" asp-controller="Home" asp-action="Index">Home</a></li>
                                <li><a  asp-area="" asp-controller="Home" asp-action="ministries">Ministries</a></li>
                                <li><a  asp-area="" asp-controller="Home" asp-action="events">Events</a></li>
                                <li><a  asp-area="" asp-controller="Home" asp-action="aboutus">About us</a></li>
                                <li><a  asp-area="" asp-controller="Home" asp-action="contactus">Contact</a></li>
                                <li><a  asp-area="" asp-controller="Home" asp-action="DonationMethods">Donation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Follow Us</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to follow us on social media, our live services and vedios.</p>
                            </div>
                             <div className="footer-social-icon">
                                <span>SocialMedia links</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://www.youtube.com/@@penielpentecostalassemblym3506"><i className="fa-brands fa-youtube youtube-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa-solid fa-people-roof"></i>
                            <div className="cta-text">
                                <h4>Malayalam Worship</h4>
                                <span>Every Sunday 10:30 A.M</span><br/>
                                <span>2015 41 Ave Sw Edmonton AB T6X2 T4</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa-solid fa-people-group"></i>
                            <div className="cta-text">
                                <h4>Hindi/Pubjabi Worship</h4>
                                <span>Every Sunday 8:15 A.M</span><br />
                                <span>2015 41 Ave Sw Edmonton AB T6X2 T4</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fa-solid fa-children"></i>
                            <div className="cta-text">
                                <h4>Sunday class</h4>
                                <span>Every Sunday 8:45 A.M</span><br />
                                <span>2015 41 Ave Sw Edmonton AB T6X2 T4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        <div className="copyright-area">
            <div className="container">
                <div>
                    <div>
                        <div className="copyright-text">
                            <p style={{fontSize:'13px'}} >Copyright &copy; 2015 - 2025, All Right Reserved.</p>
                        </div>
                    </div>
                    <div>
                        <div className="footer-menu" >
                            <ul>
                                <li ><a href="#" style={{ fontSize: '14px', fontWeight: 'normal' }}>Home</a></li>
                                <li><a href="#" style={{ fontSize: '14px', fontWeight: 'normal' }}>Terms</a></li>
                                <li><a href="#" style={{ fontSize: '14px', fontWeight: 'normal' }}>Privacy</a></li>
                                <li><a href="#"  style={{ fontSize: '14px', fontWeight: 'normal' }}>Policy</a></li>
                                <li><a href="#"  style={{ fontSize: '14px', fontWeight: 'normal' }}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </div> 

  };
  
  export default Home;