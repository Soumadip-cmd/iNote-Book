import React from "react";
import "../css/About.css";
export default function About() {
  return (
    <div>
      <div className="container my-4">
        <h4 className="header-style"><i>This is about iNote-Book:</i></h4>
        <p className="mx-3 mt-5"> Using iNotebook you could-</p>
        <ul className="list-group list-group-flush list-group-numbered mx-5">
          <li className="list-group-item">
            1. Write your personal / proffesional notes
          </li>
          <li className="list-group-item">2. Secure your notes on cloud</li>
          <li className="list-group-item">
           3. Access your notes from anywhere / from any devices
          </li>
          <li className="list-group-item">4. Edit or Delete your notes</li>
          <li className="list-group-item">5. Give your notes a relevant tag</li>
          <li className="list-group-item">6. Maintaine privacy using credentials</li>
        </ul>
      </div>
    </div>
  );
}
