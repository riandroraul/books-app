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
import ProtectedRoutes from "./components/ProtectedRoutes";
import PageError from "./components/PageError";
import ProtectedContent from "./components/auth-content/ProtectedContent";
import PageUser from "./components/auth-content/PageUser";
import ExpiredToken from "./components/ExpiredToken";

function App() {
  // console.log(exp);
  // const [user] = useState(userLogin);

  useEffect(() => {
    localStorage.getItem("token");
    localStorage.getItem("userLogin");
  });
  // console.log(user);

  // if (exp * 1000 < Date.now()) {
  //   localStorage.clear();
  //   return <div>testtt</div>;
  // }
  return (
    <BrowserRouter>
      {/* <UserContext.Provider value={{ user }}> */}
      <Routes>
        {/* public routes */}
        <Route
          path="/"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <About />
              </ProtectedRoutes>
            </ExpiredToken>
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
            <ExpiredToken>
              <ProtectedRoutes>
                <Books />
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <PageUser>
                  <Users />
                </PageUser>
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route
          path="/tambah"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <ProtectedContent>
                  <TambahBuku />
                </ProtectedContent>
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route
          path="/ubah/:id"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <ProtectedContent>
                  <UbahBuku />
                </ProtectedContent>
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/ubahRoleUser/:id"
          element={
            <ExpiredToken>
              <ProtectedRoutes>
                <UbahRoleUser />
              </ProtectedRoutes>
            </ExpiredToken>
          }
        ></Route>
        <Route
          path="*"
          element={
            <ExpiredToken>
              <PageError />
            </ExpiredToken>
          }
        ></Route>
      </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
