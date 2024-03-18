import React from "react";
import "../css/Yournotes.css";
import NoteMap from "./NoteMap";

export default function Yournotes() {
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
      <NoteMap />
    </div>
  );
}
