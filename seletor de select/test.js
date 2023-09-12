const fs = require('fs');

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

// Carregar os arquivos JSON
loadJSON('clients.json', (clientsData) => {
  loadJSON('orders.json', (ordersData) => {
    const clientIdToSearch = 7; // ID do cliente que você deseja procurar

    // Filtrar pedidos pelo client_id
    const filteredOrders = ordersData.filter((order) => order.client_id === clientIdToSearch);

    // Encontrar informações do cliente com base no client_id
    const clientInfo = clientsData.find((client) => client.client_id === clientIdToSearch);

    if (clientInfo) {
      console.log('Informações do cliente:', clientInfo);
    } else {
      console.log('Cliente não encontrado.');
    }

    if (filteredOrders.length > 0) {
      console.log('Pedidos relacionados ao cliente:', filteredOrders);
    } else {
      console.log('Nenhum pedido encontrado para este cliente.');
    }
  });
});
