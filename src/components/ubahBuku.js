import React from "react";
import Navbar from "./navbar";

const UbahBuku = () => {
  const title = "Ubah Data Buku";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <form method="post" action="">
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
