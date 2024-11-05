import React, { Component } from 'react';
import Logo from "../Images/logo.png";
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import Video from '../Images/main.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';



export class Index extends Component {
  state = {
    showTooltip: false,
  };

  componentDidMount() {
    document.title = "Welcome To Theos 😍";
    AOS.init(); 

    window.addEventListener('focus', this.handleFocus);
    window.addEventListener('blur', this.handleBlur);
  }

  componentWillUnmount() {
    window.removeEventListener('focus', this.handleFocus);
    window.removeEventListener('blur', this.handleBlur);
  }

  handleFocus = () => {
    document.title = "Welcome To Theos 😍";
  };

  handleBlur = () => {
    document.title = "Come Back To Theos! 😢";
  };

  toggleTooltip = () => {
    this.setState(prevState => ({ showTooltip: !prevState.showTooltip }));
  };

  render() {
    return (
      <div>
        <div className='all-content'>
          <header>
            <img src={Logo} alt='Theos Educational Academy Logo' />
            <span id='logo-first-name'>Theos Educational Academy</span><br />
            <span id='logo-second-name'>Thriving for Perfection</span>

            <nav id='nav-bar'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
                <li>Subjects</li>
              </ul>
            </nav>

            <button className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Login</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>

            <div 
              className="phone-icon-container" 
              onMouseEnter={this.toggleTooltip} 
              onMouseLeave={this.toggleTooltip}
            >
              <i className="fa fa-phone" id='phone-icon' aria-hidden="true"></i>
              {this.state.showTooltip && (
                <div className="tooltip">+91 9778550817</div>
              )}
            </div>
          </header>
          
          <div className='view-content'>
            <video src={Video} autoPlay loop muted className="fullscreen-video" />
            <h1 id='for-reg'>Theos Registration</h1>
            <div className="buttons">
              <button className="btn">
                <span></span>
                <p data-start="good luck!" data-text="Register!" data-title="Student"></p>
              </button>
            </div>
            <span id='or'>OR</span>
            <div className="buttons1">
              <button className="btn">
                <span></span>
                <p data-start="good luck!" data-text="Register!" data-title="Staff"></p>
              </button>
            </div>
          </div>
          <div data-aos="fade-down">

          <h1 id='learn-title'> Learning Programs</h1>
          </div>
          <div className='learn-pgm'>
            
         
            <div className="parent">
            <div data-aos="fade-right">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-down">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-left">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-right">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-up">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-left">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
            <div data-aos="fade-right">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
              <div data-aos="fade-down">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            <div className="parent">
              <div data-aos="fade-up">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Computer Science</span>
                  <p className="card-content">
                    Computer Engineering and it Infrastrucure
                  </p>
                  <span className="see-more">Explore</span>
                </div>
                <div className="date-box">
                  <img src={Logo} alt='img'></img>
                  
                </div>
              </div>
              </div>
            </div>
            
            
          </div>
          </div>
        </div>
    );
  }
}

export default Index;
