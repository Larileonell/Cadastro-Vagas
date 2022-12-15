

 ## ![reprograma-fundos-claros](https://user-images.githubusercontent.com/109538430/207935999-d05a66fa-be80-4b6a-9ff7-13b65757ae82.png)




#  Projeto final {REPROGRAMA} API Para vagas de vagas para Mulheres TRANS E CIS na área de tech 👭🚀 

## 📑 Introdução
Esse projeto final  foi pensando para ajudar todas as irmãs que estão começando agora na área de tech, a ajuda-lás a encontras as vagas que mais se encaixam no seu perfil 
## 📑 Objetivo
O objetivo desse projeto é cadastrar vagas de diferentes plataformas e empresas para elas fiquem de uma certa forma mais acessível de se econtrar para as mulheres que estão inciando no mundo da tech.

## 🛠️Tecnologias utilizadas:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Thunder Client ou Postman` | Interface gráfica para realizar os testes|
 | `swagger` | é um framework composto por diversas ferramentas que, independente da linguagem, auxilia a descrição, consumo e visualização de serviços de uma API REST.|
 | `render` |é usado para referir-se à disponibilização de um software ou uma plataforma, seja para produção ou testes. |
<br>
## 🗂️ Arquitetura  


````  📁 projeto final 
   |  
   |-   |  -  📁 src    
   |    |
   |-   | - 📁 controllers  
   |         |- 📄 controllerauth.js  
   |         |- 📄 controllerVagas.js  
   |  
   |    |- 📁 database  
   |         |- 📄 mongooseConnect.js  
   |
   |    |- 📁 models  
   |         |- 📄 consolesModel.js  
   |         |- 📄 gamesModel.js  
   |  
   |    |- 📁 routes  
   |         |- 📄 authRoutes.js   
   |         |- 📄 vagasRoutes.js  
   |    |- 📁 test
   |         |- 📄 vagas.test.js   
   |         |- 📄 login.test.js    
   |    |- 📄 app.js
   |
   |- 📄 .env
   |- 📄 .gitignore  
   |- 📄 package-lock.json  
   |- 📄 pakage.json  
   |- 📄 README.md  
   |- 📄 server.js  
   |- 📄 swagger.js 
````

<br>

### 💻 Rotas de Login e vagas
| ROTA | ENDPOINT | DESCRIÇÃO | 
| --- | --- | --- | 
| `POST` |/auth/:email | Busca login por email | 
| `GET` | /auth/all|Lista os logins por nome| 
| `POST` | /auth |Cadastra um novo login| 
| `DELETE` | /auth/:id| Deleta o login por id| 
| `PATCH` |/auth/:id |Atualiza um login| 
| `POST` | vagas/| Faz o cadastramento de uma nova vaga| 
| `GET` | /vagas/|Lista todas as vagas cadastradas|
| `GET` | /vagas/:nome|Lista por nome|  
| `DELETE` | /vagas/:id| Finaliza uma vaga já finalizada por id| 
| `PATCH` |/vagas/:id |Atualiza uma vaga já cadastrada| 

<br>

 ### 🤝 Contribua com esse projeto
Faça o fork do projeto;

Crie uma branch para realizar suas alterações: git checkout -b feature/nome-da-nova-branch

Instale as dependências:

$ npm install

$ npm install dotenv --save

Commit as alterações feitas e abra um pull request




### 💜 Agradecimentos
Gratidão a   {reprograma} por ter me escolhido para essa oportunidade incrível, vocês fizeram mudança na minha vida pessoal e profissinal. A todas as mulheres incríveis da {reprograma}, em especial a may que me ajudou muito durante toda a trajétoria,a gaia, a Suzik, a Dari, a jani e a Agnis muito obrigada meninas vocês são extremamentes necessárias. as meninas da on19 que eu tive a SORTE de conhecer, vocês foram ponto de apoio nessa caminhada.  A minha família, amigos e todos que fizeram parte da construção desse sonho. Meus sinceros obrigada. 🤍👩‍🎓




### ♓ Desenvolvido por:
<div>
<a href= "https://www.linkedin.com/in/larissa-leonel-74557916b/" target= "_blank" ><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" ></a>
  </div>
u