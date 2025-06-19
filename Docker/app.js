const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

// Conexão com o MongoDB
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
    // Lógica para popular o banco de dados
    populateDatabase();
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Definir um Schema e Modelo para o MongoDB
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String
});
const Item = mongoose.model('Item', ItemSchema);

// Função para popular o banco de dados
async function populateDatabase() {
  try {
    const itemCount = await Item.countDocuments();
    if (itemCount === 0) {
      console.log('Banco de dados vazio. Populando com dados de teste...');
      await Item.create([
        { name: 'Item de Teste 1', description: 'Este é o primeiro item inserido.' },
        { name: 'Item de Teste 2', description: 'Este é o segundo item de exemplo.' }
      ]);
      console.log('Dados de teste inseridos com sucesso!');
    } else {
      console.log('Banco de dados já contém dados. Nenhuma nova inserção.');
    }
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
}

// Configura o Pug como template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Rota para a página inicial
app.get('/', async (req, res) => {
  let dbStatus = 'Não conectado ao MongoDB';
  let items = [];

  if (mongoose.connection.readyState === 1) { // 1 significa conectado
    dbStatus = 'Conectado ao MongoDB com sucesso!';
    items = await Item.find({}); // Busca todos os itens no banco de dados
  }

  res.render('index', {
    title: 'Hello World com Pug, Bootstrap e MongoDB',
    message: 'Olá, Mundo!',
    dbStatus: dbStatus,
    items: items // Passa os itens para a view
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});