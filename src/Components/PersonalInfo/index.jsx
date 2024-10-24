import React from 'react';
import "./index.css"
function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="personal-info">
      <h1>Gerador De Curriculum Vitae. <br /> Adicionar Os Seus Dados:</h1>
      <h2>Informações Pessoais</h2>
      <label>Nome Completo:
        <input
          type="text"
          name="name"
           required placeholder="insira o seu nome"
          value={personalInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>Email:
        <input
          type="email"
          name="email"
          required placeholder="insira o seu email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </label>
      <label>Telefone:
        <input
          type="tel"
          name="phone"
          required placeholder="insira seu numero"
          value={personalInfo.phone}
          onChange={handleChange}
        />
      </label>

      <label>Outras Informações Pessoais Relevantes:
         <textarea type="text"  name="comment" rows="4" cols="50" 
         required placeholder="Adicionar mais informações"
         value={personalInfo.comment}
         onChange={handleChange}
         >
         </textarea>
      </label>
      

    </div>
  );
}

export default PersonalInfo;
