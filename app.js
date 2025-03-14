const express = require('express');
const path = require('path');
const app = express();

// Middleware para tratar dados do corpo da requisição (formulários)
app.use(express.urlencoded({ extended: true }));

// Configurar o EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar a pasta de arquivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o login
app.get('/login', (req, res) => {
  res.render('login');
});

// Rota para o chatbot
app.get('/chatbot', (req, res) => {
  res.render('chatbot');
});

// Rota POST para tratar o login (pode redirecionar para o chatbot)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validação básica
  if (username === 'usuario' && password === 'senha123') {
    return res.redirect('/chatbot');
  } else {
    return res.send('Nome de usuário ou senha incorretos!');
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000; // Definir porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
