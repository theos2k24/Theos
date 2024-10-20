import React, { Component } from 'react';
import Logo from "../Images/logo.png";
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import Video from '../Images/main.mp4';

export class Index extends Component {
  state = {
    showTooltip: false,
  };

  componentDidMount() {
    document.title = "Welcome To Theos 😍"; 
  }

  toggleTooltip = () => {
    this.setState(prevState => ({ showTooltip: !prevState.showTooltip }));
  }

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
            <button id='nav-bar-login-btn'>Login</button>
            
            <div 
              className="phone-icon-container" 
              onMouseEnter={this.toggleTooltip} 
              onMouseLeave={this.toggleTooltip}
            >
              <i className="fa fa-phone" id='phone-icon' aria-hidden="true"></i> {/* Phone icon */}
              {this.state.showTooltip && (
                <div className="tooltip">+91 9778550817</div>
              )}
            </div>
          </header>
          <div className='view-content'>
            <video src={Video} autoPlay loop muted className="fullscreen-video"  />
            <h1 id='for-reg'>Theos Registration</h1>
            <button id='student-reg'>Student</button>
            <span id='or'>OR</span>
            <button id='staff-reg'>Staff</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
