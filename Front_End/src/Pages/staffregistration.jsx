import React, { Component } from "react";
import Logo from "../images/theos.png";
import Sideimage from "../images/bgimg.jpg";
import "./staffregistration.scss";

export class StaffRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: null,
    };
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.setState({ uploadedImage: imageUrl });
    }
  };

  // Trigger file input click
  handleClick = () => {
    document.getElementById('upload').click();
  };

  render() {
    return (
      <div>
        <div className='staff-login-header'>
          <img src={Logo} alt='staff-login-logo' />
          <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span><br />
          <span id='second-logo-name'>THRIVING FOR PERFECTION</span>
        </div>

        <div className='container-staff-login'>
          <img src={Sideimage} alt='staff-login-sideimage' />
        </div>

        <div className='staff-form-container'>
          <h1>STAFF REGISTER</h1>
          <form method="post">
            <div className="for-user-img">
              {this.state.uploadedImage && (
                <img src={this.state.uploadedImage} alt='Uploaded' />
              )}
            </div>
            <input
              id="upload"
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={this.handleFileChange}
              style={{ display: 'none' }} // Hide the input
            />
            <button type="button" onClick={this.handleClick}>
              Upload Picture
            </button><br />
            <label htmlFor="name">Full Name</label><br />
            <input type="text" id="name" name="name" placeholder="Full Name" required /><br />
            <label htmlFor="dob">Date Of Birth</label><br />
            <input type="date" id="dob" name="dob" required /><br />
            <button id="staff-next-btn" type="submit">Next</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StaffRegistration;
