import React, { useState } from 'react';
import PersonalInfo from './Components/PersonalInfo/index';
import Educacao from './Components/Educacao/index';
import PracticalExperience from './Components/Experiencias/index';
import Display from './Components/Modal/index';
import "./App.css"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [education, setEducation] = useState([{
    school: '',
    degree: '',
    graduationDate: '',
    eduInfo: '',
  }]);

  const [workExperience, setWorkExperience] = useState([{
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    expInfo: '',
  }]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <>
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
          <Educacao education={education} setEducation={setEducation} />
          <PracticalExperience workExperience={workExperience} setWorkExperience={setWorkExperience} />
          <button onClick={handleSubmit}>Enviar</button>
        </>
      ) : (
        <div className='display' id='display'>
          <Display  personalInfo={personalInfo} education={education} workExperience={workExperience} />
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default App;
