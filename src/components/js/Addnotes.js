import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

export default function Addnotes() {
  const context=useContext(DataContext)
  const {addNote}=context
  const [notedata,setNotes]=useState({title:"",description:"",tag:""})
  function clr() {
    document.getElementById("notes").value = "";
  }
  const btn_click=(e)=>{
    // e.preventdefault()
    addNote(notedata.title,notedata.description,notedata.tag)
    
    setNotes({title: "", description: "", tag: ""})
  }
  const changing=(e)=>{
      setNotes({...notedata,[e.target.name]:[e.target.value]})
  }
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
        <h2 className="txt">--Write Your Note~~</h2>
          Title:
          <input type="text" className="form-control size" style={{ fontSize: "21px", fontWeight: "bold"}} placeholder="Write a Title" onChange={changing} name="title"/><br/>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            
          </label>
          Description:
          <textarea
            className="form-control size"
            id="notes"
            rows="7"
            placeholder="Enter Your Text --"
            style={{ fontSize: "21px", fontWeight: "bold" }} onChange={changing} name="description"
          ></textarea>
          <br/>
          <select className="form-control size" style={{ fontSize: "21px", fontWeight: "bold",color:"black" }} onChange={changing} name="tag" >
          {/* where you want to change there you write the name as take addNote=(e.g1,e.g2,...e.gn)= 
          so that for above example name="e.g1" or name="e.g2" or ...*/}
            <option disabled selected value={""} >--Choose Tag--</option>
            <option>General</option>
            <option>Private</option>
            <option>Default</option>
          </select>
          
          <div className="mx-3 my-3">
            <button type="button" className="btn btn-primary mx-2" onClick={btn_click}>
              Add Note
            </button>
            <button
              type="button"
              className="btn btn-primary mx-1"
              onClick={clr}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
