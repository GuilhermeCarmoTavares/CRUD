// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // substitua pelo seu usuário
  password: '17102018', // substitua pela sua senha
  database: 'loja'
});

// Conecta ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para obter todas as pessoas
app.get('/pessoas', (req, res) => {
  db.query('SELECT * FROM pessoas', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Rota para criar uma nova pessoa
app.post('/pessoas', (req, res) => {
  const { nome, email, telefone } = req.body;
  db.query('INSERT INTO pessoas (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, nome, email, telefone });
  });
});

// Rota para atualizar uma pessoa existente
app.put('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, email, telefone } = req.body;
  db.query('UPDATE pessoas SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Pessoa não encontrada');
    res.json({ id, nome, email, telefone });
  });
});

// Rota para deletar uma pessoa e resetar o ID
app.delete('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Excluir a pessoa
  db.query('DELETE FROM pessoas WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Pessoa não encontrada');

    // Resetar IDs após a exclusão
    db.query('ALTER TABLE pessoas AUTO_INCREMENT = 1', err => {
      if (err) return res.status(500).send(err);

      // Reordenar os IDs
      db.query('SET @count = 0; UPDATE pessoas SET id = @count := @count + 1;', err => {
        if (err) return res.status(500).send(err);

        res.status(204).send();
      });
    });
  });
});

// Inicializa a API
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
