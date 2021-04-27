const express = require('express');

const app = express();
app.use(express.static('public'));

const htmlPaginaInicial = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <h1>Página Inicial</h1>
  </body>
  </html>
`;

app.get('/', (req, res) => {
  res.status(200).send(htmlPaginaInicial);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
  console.log(`Acesse http://localhost:${port} para testar.`);
});
