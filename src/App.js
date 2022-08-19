import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/books";
import Users from "./components/users";
import TambahBuku from "./components/tambahBuku";
import UbahBuku from "./components/ubahBuku";
import Login from "./components/login";
import Register from "./components/register";
import UbahRoleUser from "./components/UbahRoleUser";
import Home from "./components/Home";
import About from "./components/about";

function App() {
  // const userLogin = (localStorage.getItem("userLogin"));
  // console.log(userLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/tambah" element={<TambahBuku />}></Route>
        <Route path="/ubah/:id" element={<UbahBuku />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/ubahRoleUser/:id" element={<UbahRoleUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
