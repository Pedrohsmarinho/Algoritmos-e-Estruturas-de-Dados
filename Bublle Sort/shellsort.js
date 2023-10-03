function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j;
  
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
    return arr;
  }
  
  // Exemplo de uso:
  const arr = [
    91, 63, 72, 29, 35, 67, 40, 70,  89, 79, 45, 80,
    64, 54, 76, 73, 83, 99, 32,  1,  22, 81, 90,  3,
    85, 97, 88, 55, 43, 96, 41,  9,  93, 60, 86, 18,
    30,  4, 16, 33, 49, 71, 12, 42, 100, 11, 59, 36,
    6, 92, 68, 57, 58, 13, 94, 19,  17, 38, 56, 20,
    28, 15, 47, 95,  7, 27, 50, 34,  75, 26, 24, 62,
    65, 21, 52, 82, 61, 51, 46, 69,  74, 31, 84, 44,
    10, 23, 98, 37,  8, 66,  2, 25,  48, 77, 53, 78,
    39,  5, 87, 14
];
  console.log("Array original:", arr);
  shellSort(arr);
  console.log("Array ordenado:", arr);
  