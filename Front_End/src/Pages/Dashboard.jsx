import React, { useState } from 'react';
import Logo from '../images/theos.png';
import './dashboard.scss'; // Assuming you have a dashboard.scss file
import { Link } from 'react-router-dom';

const Dashboard = () => {
  
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className='dashboardStyle'>
                <img src={Logo} alt="Logo" id='db-logo-img' />
                <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span>
                <br />
                <span id='second-logo-name'>THRIVING FOR PERFECTION</span>

                <div className="dashboard-container">
                    <nav className="sidebar">
                        <div className="for-user-img">
                            {uploadedImage && (
                                <img src={uploadedImage} alt='Uploaded' id='profile-pic' />
                            )}
                        </div>
                        <input
                            id="upload"
                            type="file"
                            accept=".jpg,.png,.jpeg"
                            onChange={handleFileChange}
                            style={{ display: 'none' }} // Hide the input
                        />
                       <div className='user-profile'>
                        
                       </div>
                        <ul>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/classes">Classes</Link>
                            </li>
                            <li>
                                <Link to="/tests">Tests</Link>
                            </li>
                            <li>
                                <Link to="/attendance">Attendance</Link>
                            </li>
                            <li>
                                <Link to="/homework">Homework</Link>
                            </li>
                            <li>
                                <Link to="/timetable">Timetable</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='container-db-tutor'>
                <img src={Logo} alt="Logo" id='db-logo-img' />
            </div>
        </div>
    );
};

export default Dashboard;

