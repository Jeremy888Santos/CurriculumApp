## Aplicação de Criação de CV

Esta aplicação é um projeto simples desenvolvido em React que permite aos usuários inserir e editar informações pessoais, educacionais e profissionais, gerando um CV (Curriculum Vitae) interativo. . O projeto foi criado com o objetivo de demonstrar a utilização de componentes simples e reutilizáveis, com foco em funcionalidades básicas como edição e submissão de formulários, e também proporcionar uma interface prática para que o usuário possa adicionar, editar e visualizar seu CV diretamente no navegador.

--------------------------------------------------------------------------------------------------------------------

# Funcionalidades
-- Informações Gerais: O usuário pode inserir dados como nome, e-mail e número de telefone.

-- Experiência Educacional: Formulário para adicionar o nome da escola, título do estudo e data de conclusão.

-- Experiência Profissional: Campos para inserir o nome da empresa, título da posição, principais responsabilidades, e datas de início e término.

-- Botões de Edição e Envio: Cada seção inclui botões "Editar" e "Enviar".
O botão "Enviar" exibe os dados inseridos em formato HTML após a submissão do formulário.
O botão "Editar" permite que o usuário modifique os dados já preenchidos, reabrindo os campos de entrada com as informações pré-existentes.

--------------------------------------------------------------------------------------------------------------------

## Estrutura do Projeto

A aplicação é construída com componentes React simples e funcionais, que recebem props para maior reutilização e clareza de código. Cada componente é responsável por uma única tarefa, promovendo modularidade e fácil manutenção.

- PersonalInfo.js – Responsável pela seção de informações gerais do usuario.
- Educação/index.jsx – Responsável pela seção de experiência educacional.
- Experiencias/index.jsx – Responsável pela seção de experiência proficional.
- Modal/index.jsx – Responsável por exibir os dados submetidos de forma formatada.

Cada um desses componentes recebe props para manter a modularidade e facilitar a manutenção do código.

--------------------------------------------------------------------------------------------------------------------

## Tecnologias Utilizadas

- React – Utilizado para criar a interface interativa e componentes reutilizáveis.
- CSS – Estilização dos componentes e layout da página.
- Vite – Ferramenta para desenvolvimento e construção do projeto.

--------------------------------------------------------------------------------------------------------------------