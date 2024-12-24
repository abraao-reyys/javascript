const readline = require('readline');

// Criar interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar entrada do usuário
rl.question('Digite seu nome: ', (nome) => {
  console.log(`Olá, ${nome}!`);
  
  // Encerrar a interface
  rl.close();
});
