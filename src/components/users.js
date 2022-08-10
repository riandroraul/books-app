import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  };

  useEffect(() => {
    getUsers(); // dijalankan saat halaman books ini di render
  }, []);
  const title = "Halaman Users";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <div className="col-md-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <a href="/ubahUser">
                        <span className="badge text-bg-success">ubah</span>
                      </a>

                      <form
                        action="/hapusUser?_method=DELETE"
                        method="post"
                        className="d-inline"
                      >
                        <button type="submit" className="badge text-bg-danger">
                          hapus
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
