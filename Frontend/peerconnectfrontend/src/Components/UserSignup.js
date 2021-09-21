import React from "react";

function UserSignup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1
            className="display-1"
            style={{
              color: "#008ad3",
            }}
          >
            <u>Peer-Connect</u>
          </h1>
        </div>
        <div className="col-md-12 container shadow-lg mt-5 p-3 mb-5 bg-white rounded">
          <div className="d-flex justify-content-center mb-5 mt-2">
            <h3 className="display-3">
              <u>Signup</u>
            </h3>
          </div>
          <form>
            <div className="form-group row">
              <div className="col-md-6">
                <div className="form-row">
                  <div className="col-md-2">
                    <label>First Name</label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-row">
                  <div className="col-md-2">
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <div className="form-row">
                  <div className="col-md-2">
                    <label>Country</label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-row">
                  <div className="col-md-2">
                    <label>Language</label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Language"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-lg">
                Username
              </label>
              <div className="col-sm-10">
                <input
                  type="username"
                  className="form-control form-control-lg"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-lg">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-lg">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="row">
                    <div className="col-md-12 mb-1 mt-1 text-center">
                      <h4>Skill #1</h4>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="form-row">
                        <div className="col-md-10 ml-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div class="form-group row">
                        <div class="col-sm-10">
                          <label class="form-check-label" for="gridCheck1">
                            Are you a Mentor ?
                          </label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="row">
                    <div className="col-md-12 mb-1 mt-1 text-center">
                      <h4>Skill #2</h4>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="form-row">
                        <div className="col-md-10 ml-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div class="form-group row">
                        <div class="col-sm-10">
                          <label class="form-check-label" for="gridCheck1">
                            Are you a Mentor ?
                          </label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="row">
                    <div className="col-md-12 mb-1 mt-1 text-center">
                      <h4>Skill #3</h4>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="form-row">
                        <div className="col-md-10 ml-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div class="form-group row">
                        <div class="col-sm-10">
                          <label class="form-check-label" for="gridCheck1">
                            Are you a Mentor ?
                          </label>
                        </div>
                        <div class="col-sm-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <hr />
          <div className="col-md-12 mt-2 mb-1 text-center">
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ width: "25%" }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
