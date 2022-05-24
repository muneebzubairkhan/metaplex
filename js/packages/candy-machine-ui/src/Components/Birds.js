import React from "react";

function Birds() {
  return (
    <div className="container-fluid py-4 birds">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5">
            <img
              src={`${window.location.origin}/images/birds.png`}
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-md-6 p-5 text-white d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-green section__heading mb-4">
              SolMoonbirds are more than just an avatar
            </h1>
            They're a collection of 10,000 utility-enabled PFPs that feature a
            richly diverse and unique pool of rarity-powered traits. What's
            more, each Moonbird unlocks private club membership and additional
            benefits the longer you hold them. We call it nesting – because,
            obviously.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birds;
