const template = require('./template');

module.exports = (req, res) => {
  const idade = parseInt(req.query.idade, 10);
  const anos = parseInt(req.query.anos, 10);
  const idadeCalculada = idade + anos;

  const html = template(
    'Calculando a Sua Idade',
    `
      <div>
        <p>Resultado da sua idade com base nas informações.</p>
        <p>
          Sua idade daqui a <strong>${anos}</strong>
          anos é: <strong>${idadeCalculada}</strong> anos.
        </p>
      </div>
    `
  );
  res.status(200).send(html);
};
