const arr = [1, 2, 3, 4, 5, 16, 7, 8, 9, 10];

function recursiveSum(array: number[]): number {
  if (!array.length) {
    return 0;
  }
  return array[0] + recursiveSum(array.slice(1));
}

console.log(recursiveSum(arr));

function recursiveLength(array: number[]): number {
  if (!array.length) {
    return 0;
  }

  return 1 + recursiveLength(array.slice(1));
}

console.log(recursiveLength(arr));

function recursiveMax(array: number[], max = 0): number {
  if (!array.length) {
    return max;
  }

  if (array[0] && array[0] > max) max = array[0];

  return recursiveMax(array.slice(1), max);
}

console.log(recursiveMax(arr));
