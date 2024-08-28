import React from 'react';
import './Patients.css'; 
import Nurse1 from '../assets/nurse1.jpg'; // Replace with your actual image path
import Nurse2 from '../assets/nurse2.jpg'; // Replace with your actual image path

const Patients = () => {
  return (
    <section className="patients-section">
      <h1 className="patients-heading">Patient Testimonials</h1>
      <div className="patient-box-container">
        <div className="patient-box1">
          <div className="patient-image1">
            <img src={Nurse2} alt="Nurse Sobia" />
          </div>
          <div className="patient-info">
            <div className="patient-name">Nurse Sobia</div>
            <div className="patient-quote">
              J&D has been very instrumental in achieving my goals as an US RN.
            </div>
          </div>
        </div>
        <div className="patient-box2">
          <div className="patient-image2">
            <img src={Nurse1} alt="Nurse Dar" />
          </div>
          <div className="patient-info">
            <div className="patient-name">Nurse Dar</div>
            <div className="patient-quote">
              J&D has been very instrumental in achieving my goals as an US RN.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patients;
