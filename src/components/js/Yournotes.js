import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "../css/Yournotes.css";

export default function Yournotes() {
  const b = useContext(DataContext);

  return (
    <div>
      <h3
        className="Container text-center"
        style={{ textDecoration: "underline" }}
      >
        Your Notes:
      </h3>
      <br />
      <br />
      <div className="container note-special my-3 p-3">
        <h2 className="text-center mb-5" style={{color:"#820300"}}><b>{b.fetchnote_data[0].title}</b></h2>
        <p>{b.fetchnote_data[0].description}</p>
      </div>
    </div>
  );
}
