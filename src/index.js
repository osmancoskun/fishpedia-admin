import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Footer, Header, Sidebar } from "./layouts";
import Login from "./pages/login/Login";
import CrudFish from "./pages/CrudFish/CrudFish";
import RegisterPage from "./pages/register-page/RegisterPage";
import {
  About,
  AdminUsers,
  Contact,
  Country,
  Home,
  Region,
  TypeWater,
  Fishes
} from "./pages";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="mainBody">
        <Header />
        <div className="display-flex row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            <Route path="/fishes" element={<Fishes/>} />
            <Route path="/country" element={<Country />} />
            <Route path="/region" element={<Region />} />
            <Route path="/typewater" element={<TypeWater />} />
            <Route path="/register-page" element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// funciona git
