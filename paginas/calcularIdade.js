const template = require('./template');

module.exports = (req, res) => {
  const params = req.method === 'GET' ? req.query : req.body;

  const idade = parseInt(params.idade, 10);
  const anos = parseInt(params.anos, 10);
  const idadeCalculada = idade + anos;
  // let nome = params.nome;
  let { nome } = params;
  if (!nome || nome === '') {
    nome = 'anônimo';
  }

  let status;
  let html;
  if (!Number.isNaN(idadeCalculada)) {
    status = 200;
    html = template(
      'Calculando a Sua Idade',
      `
        <div>
          <p>Olá ${nome}!</p>
          <p>Resultado da sua idade com base nas informações.</p>
          <p>
            Sua idade daqui a <strong>${anos}</strong>
            anos é: <strong>${idadeCalculada}</strong> anos.
          </p>
        </div>
      `
    );
  } else {
    status = 400;
    html = template(
      'Erro ao calcular idade',
      '<p>Não foi possível calcular a sua idade</p>'
    );
  }
  res.status(status).send(html);
};
