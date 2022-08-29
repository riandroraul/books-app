import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  // const { id } = useParams();

  const getUsers = () => {
    fetch("http://localhost:5000/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      onClick: (event) => event.preventDefault(),
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/hapusUser/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then(async (res) => {
          const {
            result: { deletedCount },
            message,
          } = await res.json();
          console.log(deletedCount);
          if (deletedCount === 1) {
            Swal.fire("Deleted!", message, "success");
            getUsers();
          } else {
            Swal.fire("Deleted Failed!", message, "error");
            getUsers();
          }
        });
      }
    });
  };

  const searchUser = async () => {
    const response = await fetch(
      `http://localhost:5000/searchUser?nama=${keyword}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    // searchUser();
    if (keyword === "") {
      getUsers(); // dijalankan saat halaman books ini di render
    } else {
      searchUser();
    }
  }, [keyword, users]);
  const title = "Halaman Users";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <div className="col-md-6 my-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="cari nama user ..."
              aria-label="cari nama user"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </div>
        </div>
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
                  <tr key={user._id}>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={`/ubahRoleUser/${user._id}`}>
                        <span className="badge text-bg-success">ubah</span>
                      </Link>
                      <button
                        type="submit"
                        className="badge text-bg-danger"
                        onClick={() => {
                          deleteUser(user._id);
                        }}
                      >
                        hapus
                      </button>
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
