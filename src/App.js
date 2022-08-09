import React from "react";
import Navbar from "./components/navbar";
import Books from "./components/books";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Books />
      </div>
    </div>
  );
}

export default App;
