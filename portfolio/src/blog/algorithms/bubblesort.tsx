import Algorithm from "./algorithm";
export default function BubbleSort() {
  const bubbleSort = (data: number[]): number[] => {
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

  const heading = "Bubble Sort";

  const description = [
    "Bubble Sort is a sorting algorithm.",
    "It sorts data by repeatedly comparing adjacent elements.",
    "If two elements are in the wrong order, they are swapped.",
    "This process continues through the array until no swaps are needed.",
    "The largest unsorted element 'bubbles' to its correct position with each pass.",
    "The algorithm has a time complexity of O(n^2) in the worst case.",
  ];
  const codeSnippet = `const bubbleSort = (data: number[]): void => {
    const len = data.length;
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
};`;

  return (
    <Algorithm
      code={codeSnippet}
      description={description}
      heading={heading}
      algFunc={bubbleSort}
    />
  );
}
