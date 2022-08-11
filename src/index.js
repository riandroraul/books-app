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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/tambah" element={<TambahBuku />}></Route>
      <Route path="/ubah" element={<UbahBuku />}></Route>
      <Route path="/books/hapus/:id"></Route>
    </Routes>
  </BrowserRouter>
);
