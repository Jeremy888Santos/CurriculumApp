import React from 'react';
import "./index.css"
function Display({ personalInfo, education, workExperience }) {
  return (
    <div className="cv-display">
      
      <h1>Curriculum Vitae</h1>
      <h3>Informações Pessoais</h3>
      <p>Nome Completo: {personalInfo.name}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Telefone: {personalInfo.phone}</p>
      <p>Informações Pessoais Relevantes: <br />
       {personalInfo.comment}</p>

      <h3>Experiência Educacional</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <p>Escola: {edu.school}</p>
          <p>Area de Formaçção: {edu.degree}</p>
          <p>Data de Conclusão: {edu.graduationDate}</p>
          <p>Mais Informações Relevante: <br />
           {edu.eduInfo}</p>
        </div>
      ))}

      <h3>Experiências Profissionais</h3>
      {workExperience.map((exp, index) => (
        <div key={index}>
          <p>Empresa: {exp.company}</p>
          <p>Cargo: {exp.position}</p>
          <p>Responsabilidades: {exp.responsibilities}</p>
          <p>Data de Início: {exp.startDate}</p>
          <p>Data de Término: {exp.endDate}</p>
          <p>Mais Informações Relevante: <br /> {exp.expInfo}</p>
        </div>
      ))}
      </div>
  );
}

export default Display;
