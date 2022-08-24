import React, { useEffect } from "react";
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
// import UserContext from "./components/UserContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
// import TestOutlet from "./components/TestOutlet";
import PageError from "./components/PageError";

function App() {
  // const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  // console.log(decode);
  // const [user] = useState(userLogin);

  useEffect(() => {
    localStorage.getItem("token");
    localStorage.getItem("userLogin");
  });
  // console.log(user);
  return (
    <BrowserRouter>
      {/* <UserContext.Provider value={{ user }}> */}
      <Routes>
        {/* public routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        >
          {/* <Route path="outlet" element={<TestOutlet />}></Route> */}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Login />}></Route>

        {/* protected routes */}
        <Route
          path="/books"
          element={
            <ProtectedRoutes>
              <Books />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <Users />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/tambah"
          element={
            <ProtectedRoutes>
              <TambahBuku />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/ubah/:id"
          element={
            <ProtectedRoutes>
              <UbahBuku />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/ubahRoleUser/:id"
          element={
            <ProtectedRoutes>
              <UbahRoleUser />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
