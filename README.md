## 💻 Sobre o projeto

🚗 RentalX -

Sistema de aluguel de carro
Projeto desenvolvido no curso **Ignite** da Rocketseat

---

## 🧪 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- NodeJs (https://nodejs.org/)
- Typescript (https://www.typescriptlang.org/)
- Express (https://expressjs.com/)
- CORS (https://expressjs.com/en/resources/middleware/cors.html)
- Uuid (https://www.npmjs.com/package/uuidv4)
- Multer (https://github.com/expressjs/multer/blob/master/doc/README-pt-br.md)

---

## ⚙️ Funcionalidades

- [x] Cadastrar Categorias de veiculos:
- [x] Listar Categorias de veiculos:

- [x] Cadastrar especificação de veiculos:

- [x] Cadastrar especificação de veiculos:



## 🚀 Como executar o projeto

---

### 🌉 Rotas utiizadas :

#### Base: `http://localhost:3333`

- Create `/categories` TIPO: POST
- Create `/specifications` TIPO: POST
- FindAll `/categories` TIPO: GET

### 📚 Legendas dos verbos HTTP

- GET => Buscar informação
- POST => Inserir uma informação
- PUT => Alterar uma informação
- PATCH => Alterar uma informação específica
- DELETE => Deleta uma informação

### Arquiteturas da aplicação

src -> onde fica todo o projeto
modules -> para fazer a agregação das funionalidades da aplicação.
cars -> Onde agrega tudo sobre os carros
Contracs -> Onde estão as nossas interfaces de contratos.
models -> referente as entidades da aplicação.
repositories -> Responsavel pelo repositorio da sua agregação
useCases -> Onde fica as regras de negocios da aplicação.
routes -> Responsavél por manipular nossas as rotas da aplicação.
server.ts -> Responsavél por iniciar a aplicação.

### 🚀 Meus Contatos

<h4>LinkedIn: <a href="https://www.linkedin.com/in/lbandeira/">www.linkedin.com/in/lbandeira/</a></h4>
<h4>Facebook: <a href="https://www.facebook.com/luiz.guilherme.58367/">https://www.facebook.com/luiz.guilherme.58367/</a></h4>
<h4>E-mail: <a href="mailto://arkanael@gmailcom/">arkanael@gmail.com</a></h4>
<h4>Currículo: <a href="https://arkanael.github.io/curriculo/">https://arkanael.github.io/curriculo/</a></h4>
<h4 align=center>Desenvolvido por Luiz Guilherme Bandeira</h4>

express
typescript
uuid

Comando utilizados no projeto
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
yarn add eslint -D
yarn eslint --init
@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
yarn add uuid
yarn add @types/uuid -D
yarn add Multer
yarn add @types/multer -D


Routes => Recebe a requisição e repassa
Controllers => Classes que recebem a requisição e retoram a resposta para quem está chamando
useCase => operações do sistema, regras de negocios.

Padrão Sinfgleton para instanciar as classes de repositorio
