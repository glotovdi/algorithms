const test = [1, 91, 9, 6, 54, 64, 65, 66, 67, 90];
// console.log(JSON.stringify(test));

function quickSort(array: number[]): number[] {
  if (array.length < 2) return array;
  const anchor = Math.floor(array.length / 2);
  const currentElem = array[anchor];
  const left = array.filter((c) => c < currentElem);
  const right = array.filter((c) => c > currentElem);

  console.log(left, currentElem, right);

  return [...quickSort(left), currentElem, ...quickSort(right)];
}
// quickSort(test);
console.log(quickSort(test));
