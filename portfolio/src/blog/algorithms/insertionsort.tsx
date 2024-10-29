import Algorithm from "./algorithm";
export default function InsertionSort() {
  const insertionSort = (data: number[]): number[] => {
    const len = data.length;
    console.log("Initial array:", data);

    for (let i = 0; i < len; i++) {
      let swapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }

    return data;
  };

  const heading = "Insertion Sort";

  const description = [
    "Insertion Sort is a simple sorting algorithm with a time complexity of O(n^2).",
    "It operates using two nested loops.",
    "The outer loop iterates through each element in the array, selecting one number at a time. The inner loop compares this selected number with the elements before it.",
    "If any of those preceding elements are greater, the algorithm shifts them one position to the right to make space for the selected number. This process continues until the selected number is placed in its correct position among the sorted elements.",
  ];

  const codeSnippet = `function insertionSort(array){
  for(let i = 0; i < array.length;i++){
    let insertionIndex = i;
    let currentValue = array[i];
    for (let j = i - 1; i > -1; i-- ){
      if (array[j]  > currentValue){
        array[j+1] = array[j];
        insertionIndex = j;
      } else {break;}
    }
    array[insertionIndex] = currentValue;

  }
  return array;
}`;

  return (
    <Algorithm
      code={codeSnippet}
      description={description}
      heading={heading}
      algFunc={insertionSort}
    />
  );
}
