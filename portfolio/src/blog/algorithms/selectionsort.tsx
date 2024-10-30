import Algorithm from "./algorithm";

export default function SelectionSort() {
  const code = `function SelectionSort(data){
    for(let i = 0; i < data.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < data.length; j++){
            if (data[j] < data[minIndex]) minIndex = j;
        }
        [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
    return data;
}`;
  const heading = "Selection Sort";
  const description = [
    "Selection sort is a simple sorting algorithm that divides the input list into a sorted and an unsorted region.",
    "It repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region.",
    "The process is repeated until the entire list is sorted.",
    "On each iteration, the algorithm scans the unsorted elements to find the minimum (or maximum) value.",
    "The selected value is then swapped with the first element of the unsorted region.",
    "Selection sort has a time complexity of O(n²) in all cases, making it inefficient for large datasets.",
    "It is an in-place sort, requiring no additional storage space beyond the input list.",
    "Selection sort is not a stable sorting algorithm, meaning that it may change the relative order of equal elements.",
    "While it may not be suitable for large arrays, selection sort can be effective for small lists or when memory usage is a concern.",
  ];

  function selectionSort(data: number[]) {
    for (let i = 0; i < data.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] < data[minIndex]) minIndex = j;
      }
      [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
    return data;
  }
  return (
    <Algorithm
      code={code}
      description={description}
      heading={heading}
      algFunc={selectionSort}
    />
  );
}
