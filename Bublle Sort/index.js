function bubbleSortString(arr) {
    var len = arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca as strings se estiverem fora de ordem
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Exemplo de uso com um vetor de strings
var vetorDeStrings = [
    'Jabuticaba', 'Figo',      'Pêssego',
    'Tangerina',  'Carambola', 'Castanha',
    'Pera',       'Guarana',   'Cereja',
    'Framboesa',  'Nectarina', 'Uva',
    'Groselha',   'Maracujá',  'Coco',
    'Banana',     'Pitanga',   'Caqui',
    'Açaí',       'Lichia',    'Limão',
    'Mamão',      'Jaca',      'Romã',
    'Manga',      'Kiwi',      'Goiaba',
    'Abacate',    'Abacaxi',   'Melancia',
    'Ameixa',     'Amêndoa',   'Caju',
    'Amora',      'Canela',    'Melão',
    'Maçã',       'Physalis',  'Morango',
    'Laranja'
  ]
console.log("Vetor de Strings Original:|"  + vetorDeStrings.join(' |'));

console.log("------------------------------------------------------")
var vetorOrdenado = bubbleSortString(vetorDeStrings);
console.log("Vetor de Strings Ordenado:|" + vetorOrdenado.join(' |'));
