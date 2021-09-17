import React from "react";

function UserCard() {
  return (
    <div
      className="shadow container bg-white rounded card "
      style={{ width: "25%" }}
    >
      <div className="row text-center">
        <div className="col-md-12 text-center">
          <img
            src="https://picsum.photos/200/200"
            className="rounded-circle img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-12">
          <div className="card-title mt-3 mb-3 text-center">
            Name Of The Person
          </div>
          <div className="row g-0 mt-3 mb-3 ">
            <div className="col-md-6 text-center">
              <label>Rating</label>
            </div>
            <div className="col-md-6">8.9</div>
          </div>
          <div className="row g-0 mt-3 mb-3">
            <div className="col-md-6 text-center">
              <label>Speaks</label>
            </div>
            <div className="col-md-6">Hindi</div>
          </div>
          <div className="row g-0 mt-3 mb-3">
            <div className="col-md-6 text-center">
              <label className="ml-4">Belongs To</label>
            </div>
            <div className="col-md-6">Antartica</div>
          </div>
          <div className="row g-0 mt-3 mb-3 text-center">
            <div className="col">
              <a href="www.google.com">Click Here For Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
