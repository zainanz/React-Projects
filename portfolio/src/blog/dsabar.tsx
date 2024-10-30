import "./dsabar.css";
import { useParams } from "react-router-dom";
export default function DSABar() {
  const sort_list = ["Bubble Sort", "Insertion Sort", "Selection Sort"];
  const params = useParams();

  return (
    <div style={{}} className="dsa-bar">
      <div className="section-bar">
        <p>Sorting</p>
        <ul>
          {sort_list.map((item) => (
            <a key={item} href={`/docs/${item}`}>
              <li className={params.name === item ? "active" : ""}>{item}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
