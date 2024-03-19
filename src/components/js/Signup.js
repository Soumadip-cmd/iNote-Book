import React, { useState } from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Signup = () => {

  const [signup, setSignup] = useState({ name: "", email: "", password: "", cpassword: "" })

  let history = useHistory()

  const submit = async (e) => {
    e.preventDefault()

    let { name, password, email } = signup;

    name = Array.isArray(name) ? name[0] : name;
    password = Array.isArray(password) ? password[0] : password;
    email = Array.isArray(email) ? email[0] : email;

    const url = "http://localhost:8000/create";
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify({ name, password, email }),
    });
    let answer = await response.json()
    if (answer.Success) {
      // console.log(answer)
      localStorage.setItem('iNote-Book[Tag]:', answer.token)
      history.push('/addnotes')
    }
    else {
      alert('Invalid Credentials..')
    }
  }
  const changing = (e) => {

    setSignup({ ...signup, [e.target.name]: [e.target.value] })
  }
  const passfetch = (e) => {
    let pass = document.getElementById('password').value
    let confirmPass = document.getElementById('cpassword').value
    if (pass !== confirmPass) {
      document.getElementById('wrong').innerText = "Password not Matched"
      document.getElementById('wrong').style = "color:red"
    }
    else {
      document.getElementById('wrong').innerHTML = 'Password Matched'
      document.getElementById('wrong').style = "color:green"
    }
    setSignup({ ...signup, [e.target.name]: [e.target.value] })
  }
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
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      placeholder="William Smith"
                      style={{ fontWeight: "600", fontSize: "18px" }} name="name" value={signup.name} onChange={changing} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@email.com"
                      style={{ fontWeight: "600", fontSize: "18px" }} name="email" value={signup.email} onChange={changing} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      style={{ fontWeight: "600", fontSize: "18px" }} name="password" value={signup.password} onChange={changing} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      style={{ fontWeight: "600", fontSize: "18px" }} name="cpassword" value={signup.cpassword} onChange={passfetch} required
                    /><p className="my-1" style={{ color: 'red', fontSize: "16px" }}><i id="wrong"></i></p>
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
