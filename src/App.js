// import React from 'react';
// import Navbar from './components/Navbar';
// import MainSection from './components/MainSection';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//             <MainSection />
//         </div>
//     );
// }

// export default App;



import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import NursingStaffSection from './components/NursingStaffSection';
import HourlyRate from './components/HourlyRate';
import MedicalInfoSection from './components/MedicalInfoSection';
import Patients from './components/Patients';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainSection />
            <NursingStaffSection />
            <HourlyRate/>
            <MedicalInfoSection/>
            <Patients/>
            <Footer />
        </div>
    );
}

export default App;
