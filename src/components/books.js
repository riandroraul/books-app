import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((res) => {
        // console.log("sudah di render");
        setBooks(res);
      });
  };

  useEffect(() => {
    getBooks(); // dijalankan saat halaman books ini di render
  }, []);

  const title = "Halaman Buku";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <Link to="/tambah" className="btn btn-primary my-3">
          Tambah Data Buku
        </Link>

        {/* <div className="alert alert-success col-md-6" role="alert"></div> */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Buku</th>
              <th scope="col">Penerbit</th>
              <th scope="col">Pengarang</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{book.namaBuku}</td>
                  <td>{book.penerbit}</td>
                  <td>{book.pengarang}</td>
                  <td>
                    <Link to="/ubah">
                      <span className="badge text-bg-success">ubah</span>
                    </Link>

                    <form
                      action="/hapus?_method=DELETE"
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
  );
};

export default Books;
