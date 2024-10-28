import BubbleSort from "./algorithms/bubblesort";
import "./blog.css";
import DSABar from "./dsabar";
export default function Blog() {
  const list = ["bubble-sort"];
  return (
    <div className="blog-div">
      <div>
        <DSABar />
      </div>
      <div>
        <BubbleSort />
      </div>
    </div>
  );
}
