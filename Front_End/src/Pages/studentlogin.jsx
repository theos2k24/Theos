import React, { Component } from "react";
import Logo from "../images/theos.png";
import Sideimage from "../images/bgimg.jpg";
import "./studentlogin.scss";

export class studentlogin extends Component {
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
        <div className='student-login-header'>
          <img src={Logo} alt='student-login-logo' />
          <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span><br />
          <span id='second-logo-name'>THRIVING FOR PERFECTION</span>
        </div>

        <div className='container-student-login'>
          <img src={Sideimage} alt='student-login-sideimage' />
        </div>

        <div className='student-form-container'>
          <h1>Student Register</h1>
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
            <button type="button" id="user-img-btn" onClick={this.handleClick}>
              Upload Picture
            </button><br />
          </form>
        </div>
        <form>
          <div>
            <label htmlFor ="name">Name</label>
            <input 
            type="text"
            id="name"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default studentlogin;