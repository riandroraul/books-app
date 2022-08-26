import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Swal from "sweetalert2";
import ButtonAdd from "./auth-content/ButtonAdd";
import Aksi from "./auth-content/Aksi";
// import ProtectedContent from "./ProtectedContent";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [keyword, setkeyword] = useState("");

  const getAllBooks = async () => {
    const response = await fetch("http://localhost:5000/books", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(JSON.parse(localStorage.getItem("userLogin")));
    const books = await response.json();
    setBooks(books);
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
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then(async (res) => {
          // const books = await res.json();
          // console.log(books);
          Swal.fire("Deleted!", "Book has been deleted.", "success");
          getAllBooks();
        });
      }
    });
  };

  const onSearch = async () => {
    const response = await fetch(
      "http://localhost:5000/books/search?namaBuku=" + keyword,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    setBooks(result);
  };
  useEffect(() => {
    getAllBooks(); // dijalankan saat halaman books ini di render
    localStorage.getItem("userLogin");
    localStorage.getItem("token");
    onSearch();
  }, [keyword]);

  const title = "Halaman Buku";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <ButtonAdd path="/tambah" />
        <div className="col-md-6 my-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search nama buku"
              aria-label="search nama buku"
              value={keyword}
              onChange={(event) => setkeyword(event.target.value)}
            />
            {/* <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => {
                onSearch();
              }}
            >
              search
            </button> */}
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Buku</th>
              <th scope="col">Penerbit</th>
              <th scope="col">Pengarang</th>
              <Aksi type={"th"} />
              {/* <th scope="col">Aksi</th> */}
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
                  <Aksi
                    path={`/ubah/${book._id}`}
                    onclick={() => {
                      deleteBook(book._id);
                    }}
                  />
                  {/* <td>
                    <Link to={`/ubah/${book._id}`}>
                      <span className="badge text-bg-success">ubah</span>
                    </Link>
                    <button
                      type="submit"
                      className="badge text-bg-danger tombol-hapus"
                      onClick={() => {
                        deleteBook(book._id);
                      }}
                    >
                      hapus
                    </button>
                  </td> */}
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
