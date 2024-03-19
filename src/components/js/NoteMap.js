import React, { useContext, useEffect, useRef,useState } from "react";
import DataContext from "../../context/DataContext";
import Notes from "./Notes";
import { useHistory } from "react-router-dom";

const NoteMap = () => {
  const b = useContext(DataContext);
  const { notes, getNote,editNote } = b;
  let history=useHistory()
  useEffect(() => {
    if(localStorage.getItem('Auth-Token'))
    {
      getNote()
    }
    else{
      history.push('/login')
    }
    // eslint-disable-next-line
  }, []);
  const [notedata,setNotes]=useState({id:"",edit_title:"",edit_description:"",edit_tag:""})

  const ref=useRef(null)
  const refClose=useRef(null);

  const updateNote = (currentnote) => {
    ref.current.click();
    setNotes({id:currentnote._id,edit_title:currentnote.title,edit_description:currentnote.description,edit_tag:currentnote.tag})
  };
  
  const btn_click=(e)=>{
    // e.preventdefault()
    // console.log('updated note->',notedata)
    editNote(notedata.id,notedata.edit_title,notedata.edit_description,notedata.edit_tag)
    
    refClose.current.click()
  }
  const changing=(e)=>{
      setNotes({...notedata,[e.target.name]:[e.target.value]})
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={ref} style={{display:"none"}}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Title:
              <input
                type="text"
                className="form-control size"
                style={{ fontSize: "21px", fontWeight: "bold" }}
                placeholder="Write a Title"
                onChange={changing}
                name="edit_title" value={notedata.edit_title} id="edit_title"
              />
              <br />
              <label
                htmlFor="edit_description"
                className="form-label"
              ></label>
              Description:
              <textarea
                className="form-control size"
                
                rows="7"
                placeholder="Enter Your Text --"
                style={{ fontSize: "21px", fontWeight: "bold" }}
                onChange={changing}
                name="edit_description" value={notedata.edit_description} id="edit_description"
              ></textarea>
              <br />
              <select
                className="form-control size"
                style={{ fontSize: "21px", fontWeight: "bold", color: "black" }}
                onChange={changing}
                name="edit_tag" value={notedata.edit_tag}  id="edit_tag"
              >
                {/* where you want to change there you write the name as take addNote=(e.g1,e.g2,...e.gn)= 
          so that for above example name="e.g1" or name="e.g2" or ...*/}
                <option disabled selected value={""}>
                  --Choose Tag--
                </option>
                <option>General</option>
                <option>Private</option>
                <option>Default</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal" ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={btn_click}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {notes.map((NOTE) => {
        return <Notes key={NOTE._id} updateNOTE={updateNote} note={NOTE} />;
      })}
    </>
  );
};

export default NoteMap;

