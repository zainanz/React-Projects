import Algorithm from "./algorithm";

export default function QuickSort() {
  const code = `
function partition(array, high, low){
    let pivot = array[high];
    let i = low - 1;
    for(let j = low; j < high; j++){
        if(array[j] <= pivot){
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i+1], array[high]] = [array[high], array[i+1]];
    return i+1;
}


function quickSort(array, high, low = 0){
    if (high === undefined) high = array.length - 1;
    if( low < high){ //Base case for recursion.. 
        const pivotIndex = partition(array, high, low);
        quickSort(array, low, pivotIndex-1)
        quickSort(array, pivotIndex+1, high)

    }
    
}

const my_array = [14,2,6];
quickSort(my_array)
console.log(my_array)
`;
  const heading = "Quick Sort";
  const description = [
    "Quicksort is a divide-and-conquer sorting algorithm.",
    "It selects a pivot element from the array.",
    "The array is partitioned into two sub-arrays: elements less than the pivot and those greater than it.",
    "The sub-arrays are sorted recursively.",
    "The process continues until the base case of a single element is reached.",
    "On average, it has a time complexity of O(n log n).",
    "In the worst case, it can degrade to O(n²) with poor pivot choices.",
  ];
  function quickSort(array: number[]) {
    function partition(array: number[], high: number, low: number) {
      let pivot = array[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      return i + 1;
    }

    function runQuickSort(array: number[], high?: number | undefined, low = 0) {
      if (high === undefined) high = array.length - 1;
      if (low < high) {
        //Base case for recursion..
        const pivotIndex = partition(array, high, low);
        runQuickSort(array, low, pivotIndex - 1);
        runQuickSort(array, pivotIndex + 1, high);
      }
    }
    runQuickSort(array);
    return array;
  }

  const youtubeFrame = (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Vtckgz38QHs?si=kicWCP8px60i_AJr"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );

  return (
    <Algorithm
      code={code}
      description={description}
      heading={heading}
      algFunc={quickSort}
      video={youtubeFrame}
    />
  );
}
