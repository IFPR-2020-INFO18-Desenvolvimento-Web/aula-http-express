const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Página Inicial',
    `<p>Seja bem vindo ao nosso site</p>`
  );
  res.status(200).send(html);
};
