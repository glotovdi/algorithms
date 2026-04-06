const sortArray = [1, 91, 9, 6, 54, 64, 65, 66, 67, 90];
console.log(JSON.stringify(sortArray));
function findSmallest(arr: number[]): number {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < res) res = arr[i];
  }
  return res;
}

function sortPick(array: number[]): number[] {
  const result: number[] = [];

  while (array.length > 0) {
    const smallest = findSmallest(array);
    const index = array.indexOf(smallest);
    result.push(array.splice(index, 1)[0]);
  }

  return result;
}

console.log(sortPick(sortArray));
