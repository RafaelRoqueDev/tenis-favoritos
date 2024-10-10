// Importar o módulo express
const express = require('express');

// Importar o módulo patch
const patch = require('path');

// Criar uma intância
const app = express();

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Serve arquivo estático da pasta 'public'
app.use(express.static(patch.join(__dirname, '../public')));

// Iniciar o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});

// comando par rodar o servidor: node server/server.js

// comando para rodar o servidor: node server/server.js

// comando para rodar o servidor: node server/server.js

// comando para rodar o servidor: node server/server.js

// comando para rodar o servidor: node server/server.js

