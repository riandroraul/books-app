import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault();
    const cekUser = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cekUser),
    };

    const response = await fetch("http://localhost:5000/login", requestOptions);
    const { cekUser: user, message, token } = await response.json();
    // console.log(user);
    if (email === "" || password === "") {
      return Swal.fire({
        icon: "error",
        text: "field email and password must be fill",
        title: "Email and Password is Required!",
      });
    }
    if (response.status !== 200) {
      return Swal.fire({
        icon: "error",
        text: "Ensure your email and password matching!",
        title: message,
      });
    } else {
      const decode = jwtDecode(token);
      const iat = new Date(decode.iat * 1000);
      const exp = new Date(decode.exp * 1000);

      console.log(`token set at: ${iat}`);
      console.log(`token expired at: ${exp}`);
      localStorage.setItem("token", token);
      localStorage.setItem("userLogin", JSON.stringify(user));
      // console.log(decode);
      navigate("/books");
      Swal.fire({
        icon: "success",
        title: message,
      });
    }
  };

  const title = "Halaman Login";
  return (
    <div className="container">
      <h1 className="my-3">{title}</h1>
      <form onSubmit={onLogin}>
        <div className="mb-3 col-lg-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="input email ..."
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3 col-lg-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control col-md-6"
            placeholder="input password ..."
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="my-3 col-lg-6">
          <span>
            belum punya akun ? <a href="/register">Register</a>
          </span>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
