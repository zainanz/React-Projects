import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";

import LandingSection from "./landingpage/landingsection";
import Blog from "./blog/blog";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<LandingSection />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);

reportWebVitals();
