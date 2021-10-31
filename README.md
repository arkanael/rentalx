## 💻 Sobre o projeto
<div align='center'>
    <h1>🚗 RentalX</h1>
    <p>RentalX é uma API responsável pela gerenciamento de alugueis de carros. Esse projeto foi construido durante o Bootcamp Ignite da Rocketseat.</p>
</div>

---

# Descrição

RentalX é uma API que foi construida durante o Bootcamp _Ignite_ da Rocketseat com o objetivo de introduzir os principais conceitos de desenvolvimento de código e as tecnologias mais utilizadas no mercado atualmente no que se diz respeito do desenvolvimento backend com NodeJS.

A ideia é desenvolver uma aplicação que permita o gerenciamento de alugueis de carros, permitindo aos usuários à cadastrar veiculos novos no sistema, informações sobre clientes, permitir o aluguel do carros, receber o carro devolvido, dentro outros.

O desenvolvimento da aplicação se sustenta com base nos princípios da arquitetura limpa e do SOLID. Isso foi algo bastante abordados duantes às aulas é possivel ver sua presença na construção de casos de uso, entidades, e a aplicação do padrão de repositório.

---

## 🧪 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- NodeJs (https://nodejs.org/)
- Typescript (https://www.typescriptlang.org/)
- Express (https://expressjs.com/)
- CORS (https://expressjs.com/en/resources/middleware/cors.html)
- Uuid (https://www.npmjs.com/package/uuidv4)
- Multer (https://github.com/expressjs/multer/blob/master/doc/README-pt-br.md)
- Stream (https://nodejs.org/api/stream.html)
- csvparte (https://www.npmjs.com/package/csv-parse)
- Swagger (https://www.npmjs.com/package/swagger-ui-express)
---

## ⚙️ Funcionalidades

- [x] Cadastrar Categorias de veiculos:
- [x] Importar arquivo `csv` para cadastrar de categorias de veiculos:
- [x] Listar Categorias de veiculos:

- [x] Cadastrar especificação de veiculos:




## 🚀 Como executar o projeto
Em desenvolvimento
---

### 🌉 Rotas utiizadas :

#### Base: `http://localhost:3333`

- `POST: /categories` 
Cria uma nova categoria, recebendo o `name` e a `description` dela no corpo da requisição, desde que não seja um `name` já existente. O formato da requisição fica da seguinte forma.

- `GET: /categories` 
Retorna todas as categorias armazenadas no banco de dados se um usuário válido e com  atribuições de administrador está fazendo a solicitação.

- `POST: /categories/import`
Cria novas categorias com base em um aquivo _.csv_, com os atributos de `name` e `description`. O caminho do arquivo é passado no corpo da requisição e a as categorias são criadas desde que não seja um `name` já existente.

- `POST: /specifications`
Cria uma nova especificação, recebendo o `name` e a `description` dela no corpo da requisição, desde que não seja um `name` já existente. O formato da requisição fica da seguinte forma.



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
yarn add csv-parse
yarn add swagger-ui-express
yarn add @types/swagger-ui-express -D




Routes => Recebe a requisição e repassa
Controllers => Classes que recebem a requisição e retoram a resposta para quem está chamando
useCase => operações do sistema, regras de negocios.

Padrão Sinfgleton para instanciar as classes de repositorio
