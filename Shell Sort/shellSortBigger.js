// Função para realizar o Shell Sort em um array
function shellSort(arr) {
    const n = arr.length; // Obtém o tamanho do array
    let gap = Math.floor(n / 2); // Inicializa o intervalo
  
    // Começa o loop principal do algoritmo Shell Sort
    while (gap > 0) {
      for (let i = gap; i < n; i++) { // Loop sobre elementos do array
        const temp = arr[i]; // Armazena o valor do elemento atual
        let j = i;
  
        // Realiza uma inserção de elementos usando o intervalo
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp; // Insere o valor armazenado na posição correta
      }
      gap = Math.floor(gap / 2); // Reduz o intervalo pela metade
    }
  }
  
  // Gerar uma grande lista de números aleatórios para ordenar
  const tamanhoLista = 100; // Defina o tamanho desejado
  const listaAleatoria = [];
  for (let i = 0; i < tamanhoLista; i++) {
    listaAleatoria.push(Math.floor(Math.random() * 100000)); // Gera números aleatórios até 100000 e os adiciona à lista
  }
  
  console.log("Lista não ordenada:");
  console.log(listaAleatoria); // Exibe a lista não ordenada no console
  
  // Aplicar Shell Sort à lista
  shellSort(listaAleatoria); // Chama a função de ordenação Shell Sort para ordenar a lista
  
  console.log("Lista ordenada:");
  console.log(listaAleatoria); // Exibe a lista ordenada no console
  