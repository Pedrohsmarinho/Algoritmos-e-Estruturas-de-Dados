const fs = require('fs');

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

loadJSON('clients.json', (clientsData) => {
  loadJSON('orders.json', (ordersData) => {
    const clientIdToSearch = 1;
    const filteredOrders = ordersData.filter((order) => order.client_id === clientIdToSearch);

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
