const template = require('./template');

module.exports = (req, res) => {
  const params = req.body;
  const { email, senha } = params;

  let status;
  let html;
  if (email === 'aluno@ifpr.edu.br' && senha === '321321') {
    status = 200;
    html = template('Logado com sucesso', `<p>Seja bem vindo ${email}</p>`);
  } else {
    status = 401;
    html = template(
      'Login ou senha inválidos',
      '<p>Retorne e tente novamente</p>'
    );
  }
  res.status(status).send(html);
};
