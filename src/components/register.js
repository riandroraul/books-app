import React, { useState } from "react";
import Swal from "sweetalert2";
const { useNavigate } = require("react-router-dom");

const Register = () => {
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    const newUser = {
      nama,
      email,
      password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    const response = await fetch(
      "http://localhost:5000/tambahUser",
      requestOptions
    );
    const users = await response.json();
    // console.log(response.status);
    // console.log(users);
    if (response.status === 201) {
      navigate("/login");
      Swal.fire({
        icon: "success",
        type: "success",
        title: `${users.message} silahkan login!`,
      });
    } else {
      navigate("/register");
      Swal.fire({
        icon: "warning",
        type: "success",
        title: users.message,
      });
    }
  };

  const title = "Halaman Register";
  return (
    <div className="container">
      <h1>{title}</h1>
      <form onSubmit={register}>
        <div className="mb-3 col-lg-6">
          <label htmlFor="nama" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control col-md-6"
            id="nama"
            name="nama"
            required
            value={nama}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3 col-lg-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control col-md-6"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3 col-lg-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control col-md-6"
            name="password"
            id="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="my-3 col-lg-6">
          <span>
            sudah punya akun ? silahkan <a href="/login">Login</a>
          </span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
