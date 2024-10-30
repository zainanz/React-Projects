import { useState } from "react";
type propsType = {
  algFunc: Function;
  heading: string;
  description: string[];
  code: string;
  video?: JSX.Element;
};
function Algorithm({ algFunc, heading, description, code, video }: propsType) {
  const [sortedArray, setSortedArray] = useState<Number[] | null>(null);
  const [dataHolder, setDataHolder] = useState("");
  const [error, setError] = useState<string | null>(null);
  const runFunction = (data: Number[]) => {
    try {
      return algFunc(data);
    } catch (er) {
      setError("Invalid data, please use the correct format.");
    }
  };

  const parseData = () => {
    try {
      const data = JSON.parse(dataHolder);

      const newData = runFunction(data);
      setSortedArray(newData!);
    } catch (er) {
      setError("Invalid data, please use the correct format.");
    }
  };
  const handleUserData = (e: any) => {
    setDataHolder(e.target.value);
  };
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className={video ? "p-5 flex justify-end" : "p-5"}
    >
      <div
        className="flex flex-col justify-between"
        style={video ? { width: "50%" } : {}}
      >
        <div>
          <h1 className=" bold text-3xl font-bold mb-5">{heading}</h1>
          <ul
            style={{ maxWidth: "1000px", listStyle: "circle" }}
            className="text-2sm my-6"
          >
            {description.map((d) => (
              <li className="my-3">{d}</li>
            ))}
          </ul>
          <h2 className="text-sm font-bold">Data</h2>
          <input
            onChange={handleUserData}
            style={{
              height: "40px",
              backgroundColor: "rgba(129, 178, 154, .2)",
            }}
            className="px-2 rounded text-black"
            placeholder="[3,6,8}"
          />
          <button
            style={{ backgroundColor: "rgb(129, 178, 154)" }}
            className="text-white p-2 mx-2 rounded font-bold"
            onClick={parseData}
          >
            Run
          </button>
          <p className="text-red-500">{error}</p>
          <h2 className="text-sm mt-7 font-bold">Outcome</h2>
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
        </div>
        <div>{video}</div>
      </div>

      <div
        style={
          video ? { width: "50%", overflow: "scroll" } : { marginTop: "32px" }
        }
      >
        <h3 className=" bold text-xl font-bold">Javascript Code Snippet</h3>
        <pre
          style={{
            width: "fit-content",
            minWidth: "700px",
            height: "100%",
          }}
          className="language-javascript rounded font-bold p-5"
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default Algorithm;
