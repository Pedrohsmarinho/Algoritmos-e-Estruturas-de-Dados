const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para carregar um arquivo JSON
function loadJSON(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo ${file}: ${err}`);
      return;
    }
    const jsonData = JSON.parse(data);
    callback(jsonData);
  });
}

// Solicitar o nome da tabela e o valor do campo client_id ao usuário
rl.question('Digite o nome da tabela de pedidos: ', (tableName) => {
  rl.question('Digite o valor do client_id: ', (clientId) => {
    // Carregue os dados dos clientes
    loadJSON('clients.json', (clientesData) => {
      // Carregue os dados da tabela de pedidos
      loadJSON(`${tableName}.json`, (tableData) => {
        // Encontre o nome do cliente correspondente com base no client_id
        const clientInfo = clientesData.find((client) => client.client_id === parseInt(clientId));

        if (clientInfo) {
          console.log('Nome do Cliente:', clientInfo.name);

          // Filtrar os dados da tabela de pedidos com base no client_id
          const filteredData = tableData.filter((row) => row.client_id === parseInt(clientId));
          console.log('Registros encontrados:', filteredData);
        } else {
          console.log('Nenhum cliente encontrado para o client_id especificado.');
        }

        rl.close();
      });
    });
  });
});
