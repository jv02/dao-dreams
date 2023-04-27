import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />

    <RouterProvider router={router} />

    <Footer />
  </React.StrictMode>
);
