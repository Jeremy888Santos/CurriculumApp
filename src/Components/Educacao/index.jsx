import React from 'react';
import "./index.css"

function Educacao({ education, setEducation }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setEducation(updatedEducation);
  };

  return (
    <div className="educacao">
      <h2>Experiência Academica</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <label>Escola:
            <input
              type="text"
              name="school"
              required placeholder="Preencher este campo"
              value={edu.school}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Area de Formação:
            <input
              type="text" name="degree"
              required placeholder="Preencher este campo"
              value={edu.degree}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>Data de Conclusão:
            <input
              type="date"
              name="graduationDate"
              required placeholder="Preencher este campo"
              value={edu.graduationDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>

          <label>Mais Informações Relevantes:
             <textarea type="text"  name="eduInfo" rows="4" cols="50"
             required placeholder="Adicionar mais informações"
             value={edu.eduInfo}
             onChange={(e) => handleChange(e, index)}
             >
            </textarea>
          </label>

        </div>
      ))}
    </div>
  );
}

export default Educacao;
