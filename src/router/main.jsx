import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import '../index.css'
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import HomePage from './../pages/HomePage/HomePage';
import MasterEquipment from './../pages/MasterEquipment/MasterEquipment';
import MasterEquipmentType from './../pages/MasterEquipmentType/MasterEquipmentType';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    <RouterProvider router={router} />
  </StrictMode>
);

