const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Login',
    `
      <form action="/login" method="post">
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="senha">Senha</label>
          <input type="password" name="senha" id="senha">
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    `
  );
  res.status(200).send(html);
};
