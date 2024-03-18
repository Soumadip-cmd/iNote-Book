import React from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="container bodyspecial d-flex justify-content-center top-style">
        <i>New to iNote-Book? 😀Create a new account here!~~ </i>
      </div>
      <div className="bodyspecial">
        <div className="container my-5">
          <div className="container my-4 login-bg py-4">
            <div className="row featurette mx-3 d-flex justify-content-center align-items-center pb-3">
              <div className="col-md-5 order-md-1">
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded float-end"
                  src="logo-bright.png"
                  alt="ff"
                />
              </div>
              <div className="col-md-7 order-md-2 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@email.com"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="William Smith"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    />
                  </div>
                  <div className="container d-flex justify-content-center my-3">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-1 d-flex justify-content-center"
                      style={{ height: "72%" }}
                    >
                      SignUp
                    </button>
                  </div>

                  <p className="mx-2 smallmove">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Login→
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
};

export default Signup;
