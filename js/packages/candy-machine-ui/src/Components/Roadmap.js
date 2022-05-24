import React from "react";

function Roadmap() {
  return (
    <div className="container-fluid py-5 roadmap-container">
      <div className="container">
        <div className="row text-white justify-content-center">
          <h5 className="text-center">BUILT RIGHT FROM THE BEGINNING</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex roadmap flex-column flex-md-row justify-content-around mt-4">
              <img src={`${window.location.origin}/images/mirror.png`} alt="" />
              <img
                src={`${window.location.origin}/images/green-eth.png`}
                alt=""
              />
              <img src={`${window.location.origin}/images/ipfs.png`} alt="" />
              <img
                src={`${window.location.origin}/images/compass.png`}
                alt=""
              />
              <img src={`${window.location.origin}/images/key.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
