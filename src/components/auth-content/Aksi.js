import React from "react";
import { Link } from "react-router-dom";
import userlogin from "../userlogin";

const Aksi = (props) => {
  const { role: roleUser } = userlogin();
  if (roleUser === "1" || roleUser === "2") {
    switch (props.type) {
      case "th": {
        return <th scope="col">Aksi</th>;
      }
      default: {
        return (
          <td>
            <Link to={props.path}>
              <button
                type="button"
                className="btn btn-outline-success btn-sm mx-2"
              >
                ubah
              </button>
            </Link>
            <button
              type="button"
              className="btn  btn-outline-danger btn-sm"
              onClick={props.onclick}
            >
              hapus
            </button>
          </td>
        );
      }
    }
  }
};
export default Aksi;
