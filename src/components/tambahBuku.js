import React, { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TambahBuku = () => {
  const [namaBuku, setNamaBuku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [pengarang, setPengarang] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userLogin = localStorage.getItem("userLogin");
    console.log(userLogin);
    if (!userLogin) {
      return navigate("/login");
    }
    const data = {
      namaBuku,
      penerbit,
      pengarang,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userLogin")}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:5000/books/tambah",
      requestOptions
    );
    const books = await response.json();
    console.log(response.status);
    console.log(books);
    if (response.status === 201) {
      navigate("/books");
      Swal.fire({
        icon: "success",
        type: "success",
        title: books.message,
      });
    } else {
      navigate("/tambah");
      Swal.fire({
        icon: "warning",
        type: "success",
        title: books.message,
      });
    }
  };

  const title = "Halaman Tambah Buku";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 col-md-6">
            <label htmlFor="namaBuku" className="form-label">
              Nama Buku
            </label>
            <input
              type="text"
              className="form-control"
              name="namaBuku"
              id="namaBuku"
              placeholder="masukkan nama Buku.."
              value={namaBuku}
              onChange={(event) => setNamaBuku(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="penerbit" className="form-label">
              Nama Penerbit
            </label>
            <input
              type="text"
              className="form-control"
              name="penerbit"
              id="penerbit"
              placeholder="masukkan nama penerbit.. "
              value={penerbit}
              onChange={(event) => setPenerbit(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="pengarang" className="form-label">
              Nama Pengarang
            </label>
            <input
              type="text"
              className="form-control"
              name="pengarang"
              id="pengarang"
              placeholder="masukkan nama pengarang.. "
              value={pengarang}
              onChange={(event) => setPengarang(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <button type="submit" className="btn btn-primary">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahBuku;
