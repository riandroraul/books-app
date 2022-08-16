import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./navbar";
import { useNavigate, useParams } from "react-router-dom";

const UbahBuku = () => {
  const [namaBuku, setNamaBuku] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [pengarang, setPengarang] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const handleEdit = async (event) => {
    event.preventDefault();
    const data = {
      namaBuku,
      penerbit,
      pengarang,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://localhost:5000/books/ubah/${id}`,
      requestOptions
    );
    const books = await response.json();
    // console.log(response.status);
    // console.log(books);
    if (response.status === 200) {
      navigate("/books");
      Swal.fire({
        icon: "success",
        type: "success",
        title: books.message,
      });
    } else {
      navigate("/ubah/:id");
      Swal.fire({
        icon: "warning",
        type: "success",
        title: books.message,
      });
    }
  };

  const getBookById = async () => {
    const response = await fetch(`http://localhost:5000/books/id/${id}`);
    const { book } = await response.json();
    setNamaBuku(book.namaBuku);
    setPenerbit(book.penerbit);
    setPengarang(book.pengarang);
  };

  useEffect(() => {
    getBookById();
  }, []);

  const title = "Ubah Data Buku";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <form onSubmit={handleEdit}>
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
              required
              value={namaBuku}
              onChange={(event) => setNamaBuku(event.target.value)}
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
              required
              value={penerbit}
              onChange={(event) => setPenerbit(event.target.value)}
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
              required
              value={pengarang}
              onChange={(event) => setPengarang(event.target.value)}
            />
          </div>
          <div className="mb-3 col-md-6">
            <button type="submit" className="btn btn-primary">
              Ubah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UbahBuku;
