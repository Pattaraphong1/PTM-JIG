import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@babel/polyfill";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import MasterEquipment from "./components/MasterEquipment.jsx";
import MasterEquipmentType from "./components/MasterEquipmentType.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MasterEquipment",
    element: <MasterEquipment />,
  },
  {
    path: "/MasterEquipmentType",
    element: <MasterEquipmentType />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App/>    */}
    <RouterProvider router={router} />
  </StrictMode>
);
