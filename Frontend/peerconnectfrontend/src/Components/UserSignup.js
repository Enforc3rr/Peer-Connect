import React from "react";

function UserSignup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-2">
            <u>Signup</u>
          </h2>
        </div>
        <div className="col-md-12 container shadow-lg mt-5 p-3 mb-5 bg-white rounded">
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
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label className="custom-control-label">Peer</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label
                          className="custom-control-label"
                          for="customRadio2"
                        >
                          Mentor
                        </label>
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
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label className="custom-control-label">Peer</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label
                          className="custom-control-label"
                          for="customRadio2"
                        >
                          Mentor
                        </label>
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
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Skill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1 mt-1">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label className="custom-control-label">Peer</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" />
                        <label
                          className="custom-control-label"
                          for="customRadio2"
                        >
                          Mentor
                        </label>
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
