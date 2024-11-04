import "./mydocs.css";
import DSABar from "./dsabar";
import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog-div">
      <DSABar />
      <Outlet />
      <div className="pop-up">
        Hi there, please note this is under contruction..
      </div>
    </div>
  );
}
