import React from "react";

function Highrise() {
  return (
    <div className="container-fluid py-4 highrise">
      <div className="container">
        <div className="row flex-column align-items-center">
          <div className="col-md-6 p-5 d-flex">
            <img
              src={`${window.location.origin}/images/Highrise.svg`}
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-md-8 p-5 text-white">
            <h4 className="mb-0">NEXT UP</h4>
            <h1 className="text-green section__heading mb-4">Highrise</h1>
            Moonbirds is brought to you by PROOF; the team behind the PROOF
            Collective and Grails. Our next project, codenamed Highrise is a
            focused and novel take on the metaverse. The metaverse is an
            increasingly crowded space, but built correctly, has great promise
            for connection and community. The PROOF-built metaverse will be a
            dramatic departure from the existing 'never-ending' worlds that feel
            like a digital ghost town. Ours is uniquely different, and you'll
            have first access as a nested Moonbirds holder. The Moonbirds mint
            is the beginning.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highrise;
