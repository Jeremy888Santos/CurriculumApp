import React from 'react';
import "./index.css"
function PracticalExperience({ workExperience, setWorkExperience }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...workExperience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setWorkExperience(updatedExperience);
  };

  return (
    <div className="practical-experience">
      <h2>Experiências Profissionais</h2>
      {workExperience.map((exp, index) => (
        <div key={index}>
          <label>Empresa:
            <input
              type="text"
              name="company"
              required placeholder="Preencher este campo"
              value={exp.company}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Cargo:
            <input
              type="text"
              name="position"
              required placeholder="Preencher este campo"
              value={exp.position}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Responsabilidades:
            <input
              type="text"
              name="responsibilities"
              required placeholder="Preencher este campo"
              value={exp.responsibilities}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Data de Início:
            <input
              type="date"
              name="startDate"
              required placeholder="Preencher este campo"
              value={exp.startDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Data de Término:
            <input
              type="date"
              name="endDate"
              required placeholder="Preencher este campo"
              value={exp.endDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          
          <label>Mais Informações Relevantes:
             <textarea type="text"  name="expInfo" rows="4" cols="50"
             required placeholder="Adicionar mais informações" 
             value={exp.expInfo}
             onChange={(e) => handleChange(e, index)}
             >
            </textarea>
          </label>

        </div>
      ))}
    </div>
  );
}

export default PracticalExperience;
