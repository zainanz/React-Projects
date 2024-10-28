import { useState } from "react";

export default function BubbleSort() {
  const [sortedArray, setSortedArray] = useState<Number[] | null>(null);
  const [dataHolder, setDataHolder] = useState("");
  const [error, setError] = useState<string | null>(null);
  const bubbleSort = (data: Number[]) => {
    try {
      const len = data.length;
      console.log(data);
      for (let i = 0; i < len; i++) {
        let swapped = false;
        for (let j = 0; j < len - i; j++) {
          if (data[j] >= data[j + 1]) {
            [data[j], data[j + 1]] = [data[j + 1], data[j]];
          }
          console.log(data);
          setError("");
          setSortedArray(data);
        }
      }
    } catch (er) {
      setError("Invalid data, please use the correct format.");
    }
  };

  const parseData = () => {
    try {
      console.log(dataHolder);
      const data = JSON.parse(dataHolder);
      bubbleSort(data);
    } catch (er) {
      console.log("Error");
      setError("Invalid data, please use the correct format.");
    }
  };
  const handleUserData = (e: any) => {
    setDataHolder(e.target.value);
  };
  return (
    <div className="p-5">
      <h3 className=" bold text-3xl">Bubble Sort</h3>
      <p>
        Bubble Sort is a sorting algorithm which sorts the data by comparing 2
        values at a time and then it moves forward.
      </p>
      <h2 className="text-xl">Data</h2>
      <input
        onChange={handleUserData}
        style={{ height: "40px", backgroundColor: "rgba(129, 178, 154, .2)" }}
        className="px-2 rounded text-black"
        placeholder="[3,6,8}"
      />
      <button
        style={{ backgroundColor: "rgb(129, 178, 154)" }}
        className="text-white p-2 mx-2 rounded"
        onClick={parseData}
      >
        Run
      </button>
      <p className="text-red-500">{error}</p>
      <h2 className="text-xl">Outcome</h2>
      <p
        style={{
          width: "fit-content",
          minWidth: "200px",
          height: "35px",
          backgroundColor: "rgba(129, 178, 154, .2)",
          color: "",
        }}
        className="p-1 sortedArray px-2"
      >
        [{sortedArray && sortedArray!.join(", ")}]
      </p>
      <pre
        style={{
          width: "fit-content",
          //   backgroundColor: "rgba(129, 178, 154, .8)",
        }}
        className="language-javascript rounded font-bold p-5 my-3"
      >
        <code>
          {`const bubbleSort = (data: number[]): void => {
    const len = data.length;
    console.log("Initial array:", data);

    for (let i = 0; i < len; i++) {
        let swapped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
                swapped = true;
            }
            console.log("Current array state:", data);
        }
        if (!swapped) break;
    }

    setSortedArray(data);
};`}
        </code>
      </pre>
    </div>
  );
}
