function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j;
  
        for (j = i; j >= gap && arr[j - gap].localeCompare(temp) > 0; j -= gap) {
          arr[j] = arr[j - gap];
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  }
  
  const stringArray = [
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
  ];
  console.log("Array original:", stringArray);
  shellSort(stringArray);
  console.log("Array ordenado:", stringArray);
  