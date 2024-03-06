import React from "react";

export default function Addnotes() {
  function clr() {
    document.getElementById("notes").value = "";
  }
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2 className="txt">--Write Your Note~~</h2>
          </label>
          <textarea
            className="form-control size"
            id="notes"
            rows="7"
            placeholder="Enter Your Text --"
            style={{ fontSize: "21px", fontWeight: "bold" }}
          ></textarea>
          <div className="mx-3 my-3">
            <button type="button" className="btn btn-primary mx-2">
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
