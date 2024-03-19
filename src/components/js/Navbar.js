import React from "react";
import '../css/Navbar.css';
import { Link, useLocation,useHistory } from "react-router-dom";
const Navbar = () => {

  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname)
  });

  let history=useHistory()
  const logOut=()=>{
    localStorage.removeItem('Auth-Token')
    history.push('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav_special" style={{ backgroundColor: "rgb(80 196 237 / 64%)", fontWeight: "800" }}>
        <Link className="navbar-brand brand_name" to="/" style={{ fontFamily: "Ojuju, sans-serif", fontSize: "28px" }}>
          <span style={{ color: "#0C359E", fontWeight: "800" }}>i</span><span><span style={{ color: "#561C24", fontWeight: "700" }}>N</span>ote<span style={{ color: "#561C24", fontWeight: "700" }}>B</span>ook</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${location.pathname === '/yournotes' ? "active" : ""}`}>
              <Link className="nav-link" to="/yournotes">
                YourNotes <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/addnotes' ? "active" : ""}`}>
              <Link className="nav-link" to="/addnotes">
                AddNotes
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/about' ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

          </ul>


          {!localStorage.getItem('Auth-Token')?<div><Link
              className="btn btn-outline-dark my-2 my-sm-0 nav_special mx-1"
              to='/login'>
              Login
            </Link>
            <Link
              className="btn btn-primary my-2 my-sm-0 nav_special mx-1"
              to='/signUp' id="modalSignin"
            >
              Sign-Up
            </Link> </div>:<Link
              className="btn btn-outline-dark my-2 my-sm-0 nav_special mx-1"
              onClick={logOut} to='/login'>
              Logout
            </Link>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
