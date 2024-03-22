import { useState } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
  const fetchnote_data = []
  
  const [notes, setNotes] = useState(fetchnote_data);

  //get all note
  const getNote=async()=>{
    const url = "http://localhost:8000/note";
    const response = await fetch(url, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('Auth-Token'),
      },
      
      
    });
    // return response.json();
    const json=await response.json()
    // console.log(response.json());---> this is wrong as we cant use await here..
    // console.log(json);
    setNotes(json)
    
  }

  //add note

  const addNote = async (title, description, tag) => {
    //add api call
    //for converted into string->this portion imp...(line:35,36,37)
    title = Array.isArray(title) ? title[0] : title;
    description = Array.isArray(description) ? description[0] : description;
    tag = Array.isArray(tag) ? tag[0] : tag;

    const url = "http://localhost:8000/addnote";
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('Auth-Token'),
      },
      
      body: JSON.stringify({ title, description, tag }),
    });
    // return response.json();
    const json=await response.json()
    
    //fetch note(add)
   
    setNotes(notes.concat(json));
  };

  //delete note
  const deleteNote = async (id) => {
    //delete api call
    const url = `http://localhost:8000/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",

      headers: {
        
        "auth-token":
          localStorage.getItem('Auth-Token'),
      },
     
      
    });
    // return response.json();
    // eslint-disable-next-line
    const json=await response.json()
    // console.log(json)
    //fetch note(delete)
    const delNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(delNote);
    
  };

  //edit note
  const editNote = async (id, title, description, tag) => {
    // edit api call
    const url = `http://localhost:8000/updatenote/${id}`;
    
    //for converted into string->this portion imp...(line:97,98,99)
    title = Array.isArray(title) ? title[0] : title;
    description = Array.isArray(description) ? description[0] : description;
    tag = Array.isArray(tag) ? tag[0] : tag;
    const response = await fetch(url, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('Auth-Token'),
      },
      
      body: JSON.stringify({title, description, tag }),
    });
    // return response.json();
    // eslint-disable-next-line
    const json=await response.json()
    

    //fetch note(edit)
    const notetoString=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notetoString.length; index++) {
      const element = notetoString[index];
      if (element._id === id) {
        notetoString[index].title = title;
        notetoString[index].description = description;
        notetoString[index].tag = tag;
        break;
      }
      
    }
    setNotes(notetoString)
  };
  return (
    <DataContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNote}}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
