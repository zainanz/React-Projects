import { useEffect, useState } from "react";
import BubbleSort from "./algorithms/bubblesort";
import InsertionSort from "./algorithms/insertionsort";
import { useParams } from "react-router-dom";
import SelectionSort from "./algorithms/selectionsort";
import QuickSort from "./algorithms/quicksort";
export default function MainSection() {
  const params = useParams();
  const [currentComponent, setCurrentComponent] = useState<JSX.Element | null>(
    null
  );
  useEffect(() => {
    switch (params.name) {
      case "Bubble Sort":
        setCurrentComponent(() => <BubbleSort />);
        break;
      case "Insertion Sort":
        setCurrentComponent(() => <InsertionSort />);
        break;
      case "Selection Sort":
        setCurrentComponent(() => <SelectionSort />);
        break;
      case "Quick Sort":
        setCurrentComponent(() => <QuickSort />);
        break;
      default:
        setCurrentComponent(() => <BubbleSort />);
    }
  }, [params.name]);
  return (
    <div className="p-9 w-full" style={{ minHeight: "100vh" }}>
      {currentComponent}
    </div>
  );
}
