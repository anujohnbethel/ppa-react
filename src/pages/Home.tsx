import logo from '../assets/images/logo.png'; // adjust path based on your file location



const Home = () => {
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
                  <li className="nav-item active">
                     <a className="nav-link" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" asp-area="" asp-controller="Home" asp-action="Ministries">Ministries</a>
                  </li>            
                  <li className="nav-item">
                     <a className="nav-link" asp-area="" asp-controller="Home" asp-action="Events">Events</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" asp-area="" asp-controller="Home" asp-action="AboutUs">About Us</a>
                  </li>
                  <li className="nav-item">              
                     <a className="nav-link" asp-area="" asp-controller="Home" asp-action="Contactus">Contact</a>
                  </li>
                  <li className="nav-item">              
                     <a className="nav-link" asp-area="" asp-controller="Home" asp-action="DonationMethods">Donation</a>
                  </li>
                </ul>
      
              </nav>
           

      
     
        </header>
    </div> 

  };
  
  export default Home;