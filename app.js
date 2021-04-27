const express = require('express');
const index = require('./paginas/index');
const calcularIdade = require('./paginas/calcularIdade');
const formularioIdade = require('./paginas/formularioIdade');

const app = express();
app.use(express.static('public'));

app.get('/', index);
app.get('/calcularIdade', calcularIdade);
app.get('/formularioIdade', formularioIdade);

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
