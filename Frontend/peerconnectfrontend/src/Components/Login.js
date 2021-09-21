import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="col-12 d-flex justify-content-center align-self-center">
            <h1
              className="display-1"
              style={{
                marginTop: "35%",
                color: "#008ad3",
              }}
            >
              <u>Peer-Connect</u>
            </h1>
          </div>
          <div className="col-12 d-flex justify-content-center align-self-center">
            <p>
              <em>Perfect Place To Connect Peers With Mentor</em>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="shadow bg-white rounded"
            style={{ marginTop: "35%", marginBottom: "10%" }}
          >
            <div className="text-center">
              <h4 className="display-4">
                <u> Login </u>
              </h4>
            </div>
            <form className="p-3">
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <input
                    className="form-control input-sm"
                    placeholder="username"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <input
                    className="form-control input-sm"
                    placeholder="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="row mt-5 mb-2 text-center">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="text-center mt-4 mb-2">
                <a href="www.google.com">Forgot Password?</a>
              </div>
              <hr />
              <div className="row mt-2 mb-2 text-center">
                <div className="col-md-12">
                  <button type="button" className="btn btn-success btn-lg">
                    Create New Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
