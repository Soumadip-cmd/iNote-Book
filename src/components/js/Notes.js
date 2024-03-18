import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const Notes = (props) => {
  const { note ,updateNOTE} = props;
  const context=useContext(DataContext)
  const {deleteNote}=context;

  const del=()=>{
    deleteNote(note._id)
  }
  return (
    <div>
      <div className="container note-special my-3 p-3">
        <h2 className=" mb-3" style={{ color: "#820300" }}>
          <b>
            {/*  */}
            {note.title}  <i style={{color:"#4c4c4c",fontSize:"18px"}}>({note.tag})</i>
          </b>
        </h2>
        <p>
          {/*  */}
          {note.description}
        </p>
        <div className=" mx-2 extra-icon-design my-2">
          <span title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#B80000"
              className="bi bi-trash3-fill mx-2 icon-sp"
              viewBox="0 0 16 16" onClick={del} 
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </span>
          <span title="Edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0D1282"
              className="bi bi-pencil-square mx-2 icon-sp"
              viewBox="0 0 16 16" onClick={()=>{updateNOTE(note)}}//tooo much imp!!!!!!! must set onclick like this to fetch the particular note.id!!!!
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notes;
