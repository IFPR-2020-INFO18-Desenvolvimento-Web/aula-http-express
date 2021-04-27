const express = require('express');
const index = require('./paginas/index');
const calcularIdade = require('./paginas/calcularIdade');
const formularioIdade = require('./paginas/formularioIdade');
const formularioLogin = require('./paginas/formularioLogin');
const validaLogin = require('./paginas/validaLogin');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', index);
app.get('/formularioIdade', formularioIdade);
app.get('/calcularIdade', calcularIdade);
app.post('/calcularIdade', calcularIdade);
app.get('/login', formularioLogin);
app.post('/login', validaLogin);

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
