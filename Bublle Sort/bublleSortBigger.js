const fs = require('fs');

function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

var listaGrande = [];
for (var i = 10000; i > 0; i--) {
    listaGrande.push(i);
}

var desordenadaJSON= JSON.stringify(listaGrande);
fs.writeFileSync('desordenada.json', desordenadaJSON);
console.log("Lista desordenada foi salva em 'desordenada.json'");

var listaOrdenada = bubbleSort(listaGrande);

var resultadoJSON = JSON.stringify(listaOrdenada);
fs.writeFileSync('resultado.json', resultadoJSON);
console.log("Resultado foi salvo em 'resultado.json'");
