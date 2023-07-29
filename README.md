# 🔗 Url shortner

Simplesmente uma API server usando Nodejs para encurtar URLs. Para isso, basta consumir as rotas.

## Rotas

Method |  EndPoint | Body Params | Query Params |Returns
:---------: | :------ | :-------: | :--------: | :--------:
<strong>GET</strong>| /noauth/shorten-url/:shortUrl |   -  | shortUrl | type : Object
<strong>POST<strong>  | /noauth/shorten-url |   URL | - | type : Object

## Arquitetura do Projeto
Foi utilizado uma arquitetura MVC. Portanto temos:

📁 src /<br>
&nbsp; &nbsp; &nbsp; 📁 config /env.js <br>
&nbsp; &nbsp; &nbsp; 📁 db /dbConnect.js <br>
&nbsp; &nbsp; &nbsp; 📁 controllers /urlController.js <br>
&nbsp; &nbsp; &nbsp; 📁 service /urlService.js <br>
&nbsp; &nbsp; &nbsp; 📁 models/urlModel<br>
&nbsp; &nbsp; &nbsp; 📝 app.py <br>
📝 server.py <br>

## Dependências
Antes de executar o server, é necessário instalar as dependências do projeto
```console
npm install
```
## Executar o código
  Para executar o servidor:
  ```console
npm start
```
