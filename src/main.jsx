import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider";
// import AOS from "aos";
// import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={route}></RouterProvider>
  </AuthProvider>
);
