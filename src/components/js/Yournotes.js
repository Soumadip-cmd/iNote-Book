import React, { useContext } from "react";
import "../css/Yournotes.css";
import NoteMap from "./NoteMap";
import DataContext from "../../context/DataContext";

export default function Yournotes() {
  const context = useContext(DataContext);
  const { notes } = context;
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
      <div className="container ">
        <h2>
          <i>{notes.length === 0 && "Not add any note YET!!!!..🙂"}</i>
        </h2>
      </div>
      <NoteMap />
    </div>
  );
}
