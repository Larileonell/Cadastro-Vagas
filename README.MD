<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

#  Projeto final {REPROGRAMA} API Para Cadastro de vagas para Mulheres TRANS E CIS na área de tech 👭🚀 

## 📑 Introdução
Esse projeto final  foi pensando para ajudar todas as irmãs que estão começando agora na área de tech, a ajuda-lás a encontras as vagas que mais se encaixam no seu perfil 
## 📑 Objetivo
O objetivo desse projeto é cadastrar vagas de diferentes plataformas e empresas para elas ficarem de uma certa forma mais acessível para as mulheres que estão ingressando no mundo da tech.

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
   |         |- 📄 consolesController.js  
   |         |- 📄 gamesController.js  
   |  
   |    |- 📁 database  
   |         |- 📄 mongooseConnect.js  
   |
   |    |- 📁 models  
   |         |- 📄 consolesModel.js  
   |         |- 📄 gamesModel.js  
   |  
   |    |- 📁 routes  
   |         |- 📄 consolesRoutes.js   
   |         |- 📄 gamesRoutes.js  
   |    |- 📁 test
   |         |- 📄 cadastro.test.js   
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

### 💻 Rotas de Login e Cadastro
| ROTA | ENDPOINT | DESCRIÇÃO | 
| --- | --- | --- | 
| `POST` |/login/:email | Busca login por email | 
| `GET` | /login/all|Lista os logins por nome| 
| `POST` | /login |Cadastra um novo login| 
| `DELETE` | /login/:id| Deleta o login por id| 
| `PATCH` |/login/:id |Atualiza um login| 
| `POST` | /Cadastro| Faz o cadastramento de uma nova vaga| 
| `GET` | /cadastro/all|Lista todas as vagas cadastradas|
| `GET` | /cadastro/:nome|Lista por nome|  
| `DELETE` | /cadastro/:id| Finaliza uma vaga já finalizada por id| 
| `PATCH` |/cadastro/:id |Atualiza uma vaga já cadastrada| 

<br>

 ### 🤝 Contribua com esse projeto
Faça o fork do projeto;

Crie uma branch para realizar suas alterações: git checkout -b feature/nome-da-nova-branch

Instale as dependências:

$ npm install

$ npm install dotenv --save

Commit as alterações feitas e abra um pull request




### 💜 Agradecimentos





### ♓ Desenvolvido por:

