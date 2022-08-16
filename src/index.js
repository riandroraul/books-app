import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/books";
import Users from "./components/users";
import TambahBuku from "./components/tambahBuku";
import UbahBuku from "./components/ubahBuku";
import Login from "./components/login";
import Register from "./components/register";
import UbahRoleUser from "./components/UbahRoleUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/tambah" element={<TambahBuku />}></Route>
      <Route path="/ubah/:id" element={<UbahBuku />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/ubahRoleUser/:id" element={<UbahRoleUser />}></Route>
    </Routes>
  </BrowserRouter>
);
