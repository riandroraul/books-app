import React, { useState, useEffect } from "react";

const Books = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const books = await fetch("http://localhost:5000/books");
    setBook(books);
  };

  return (
    <div>
      <a href="/tambah" class="btn btn-primary my-3">
        Tambah Data Buku
      </a>

      {/* <div class="alert alert-success col-md-6" role="alert"></div> */}
      <table class="table table-hover">
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
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <a href="/ubah">
                <span class="badge text-bg-success">ubah</span>
              </a>

              <form
                action="/hapus?_method=DELETE"
                method="post"
                class="d-inline"
              >
                <button type="submit" class="badge text-bg-danger">
                  hapus
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Books;
