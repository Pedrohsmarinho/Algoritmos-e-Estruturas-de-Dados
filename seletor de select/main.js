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

rl.question('Digite o nome da tabela de pedidos: ', (tableName) => {
  rl.question('Digite o valor do client_id: ', (clientId) => {
    loadJSON('clients.json', (clientesData) => {
      loadJSON(`${tableName}.json`, (tableData) => {
        const clientInfo = clientesData.find((client) => client.client_id === parseInt(clientId));

        if (clientInfo) {
          console.log('Nome do Cliente:', clientInfo.name);

          const filteredData = tableData.filter((row) => row.client_id === parseInt(clientId));
          if (filteredData >=0) {
            console.log("nenhum registro encontrado ")
          }
          else {
            console.log('Registros encontrados:', filteredData);
          }
        } else if (clientId >=0) {
          console.log('Nenhum cliente encontrado para o client_id especificado.');
        }

        rl.close();
      });
    });
  });
});
