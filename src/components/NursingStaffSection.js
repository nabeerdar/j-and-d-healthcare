import React from 'react';
import './NursingStaffSection.css';
import centerImage from '../assets/center-image.jpg'; 
import arrowRight from '../assets/arrow-right.png'; 

const NursingStaffSection = () => {
    return (
        <div className='nursing-staff-main-heading'>
        <h1>Who We Serve at J&D Medical Staffing</h1>
        <div className="nursing-staff-container">
            <img src={centerImage} alt="Center" className="nursing-staff-image" />
            <div className="nursing-staff-content">
                <h2 className="nursing-staff-heading">Join Our Nursing Staff</h2>
                <hr className="nursing-staff-line" />
                <p className="nursing-staff-text">It's not just a job, it's a career.</p>
                <button className="nursing-staff-button">
                    Start the Process
                    <img src={arrowRight} alt="Right Arrow" className="button-icon" />
                </button>
            </div>
        </div>
        </div>
    );
};

export default NursingStaffSection;