import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import LandingSection from "./landingpage/landingsection";
import Blog from "./blog/mydocs";
import MainSection from "./blog/mainsection";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<LandingSection />} />
      <Route path="/docs" element={<Blog />}>
        <Route index element={<MainSection />} />
        <Route path=":name" element={<MainSection />} />
      </Route>
    </Route>
  )
);

root.render(<RouterProvider router={router} />);

reportWebVitals();
