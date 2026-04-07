const array = [1, 6, 9, 54, 64, 65, 66, 67, 90];

function binarySearch(arr: number[], item: number): number {
  if (!arr.length) return -1;
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let midIndex = Math.floor((min + max) / 2);
    let guessItem = arr[midIndex];
    if (guessItem === item) return midIndex;
    if (item > guessItem) {
      min = midIndex + 1;
    } else {
      max = midIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 9));

function binarySearchRecursion(arr: number[], item: number, start = 0): number {
  if (!arr.length) return -1;
  let min = 0;
  let max = arr.length - 1;

  let midIndex = Math.floor((min + max) / 2);
  let guessItem = arr[midIndex];
  if (guessItem === item) return start + midIndex;
  if (item > guessItem) {
    return binarySearchRecursion(arr.slice(midIndex + 1), item, start);
  }
  return binarySearchRecursion(arr.slice(0, midIndex), item, start);
}

console.log(binarySearchRecursion(array, 90));
