import React, { useContext, useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Alert from "./Alert";
import AlertContext from "../../context/Alert/AlertContext";
export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const {showAlert}=useContext(AlertContext)
  //for redirecting

  let history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    let email = Array.isArray(login.email) ? login.email[0] : login.email;
    let password = Array.isArray(login.password)
      ? login.password[0]
      : login.password;
    const url = "http://localhost:8000/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json.Tag_Number);
    if (json.Success) {
      //save the auth-token and redirect to yournote page
      localStorage.setItem("Auth-Token", json.Tag_Number);
      history.push("/yournotes");
      showAlert("success","Successfully Logged In..")
    } else {
      showAlert("danger","Login Failed!!..Check Again..")
    }
  };

  const changing = (e) => {
    setLogin({ ...login, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      {/* alert set */}
      <div>
        {/* <Alert type="success" msg={state.name} /> */}
      </div>

      <div className="container bodyspecial d-flex justify-content-center top-style">
        <i>Login to continue using iNote-Book~~</i>
      </div>
      <div className="bodyspecial">
        <div className="container my-5">
          <div className="container my-4 login-bg">
            <div className="row featurette mx-3 d-flex justify-content-center align-items-center pb-3">
              <div className="col-md-5 order-md-1">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded float-end"
                  src="logo-bright.png"
                  alt="logo image"
                />
              </div>
              <div className="col-md-7 order-md-2 ">
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@email.com"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                      onChange={changing}
                      name="email"
                      value={login.email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      style={{ fontWeight: "600", fontSize: "20px" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={changing}
                      name="password"
                      value={login.password}
                      required
                    />
                  </div>
                  <div className="footer-setup">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="mx-2"
                        id="exampleCheck1"
                      />
                      <label
                        className=""
                        htmlFor="exampleCheck1"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-1"
                      style={{ height: "72%" }}
                    >
                      Login
                    </button>
                  </div>
                  <p className="mx-2 smallmove">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Sign-Up→
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
