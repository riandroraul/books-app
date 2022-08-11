import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const deleteBook = (id) => {
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
        fetch(`http://localhost:5000/books/hapus/${id}`, {
          method: "DELETE",
        }).then(async (res) => {
          const books = await res.json();
          console.log(books);
          Swal.fire("Deleted!", "Book has been deleted.", "success");
          getBooks();
        });
      }
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
                <tr key={book._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{book.namaBuku}</td>
                  <td>{book.penerbit}</td>
                  <td>{book.pengarang}</td>
                  <td>
                    <Link to="/ubah">
                      <span className="badge text-bg-success">ubah</span>
                    </Link>
                    {/* <form onSubmit={(event) => event.preventDefault()}> */}
                    <button
                      type="submit"
                      className="badge text-bg-danger tombol-hapus"
                      onClick={() => {
                        deleteBook(book._id);
                      }}
                    >
                      hapus
                    </button>
                    {/* </form> */}
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
