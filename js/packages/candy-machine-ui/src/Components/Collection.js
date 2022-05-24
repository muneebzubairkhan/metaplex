import React from "react";

function Collection() {
  return (
    <div className='container-fluid py-4 collection'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 p-5 text-white d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-green section__heading mb-4'>A collection built with utility & community at the foundation</h1>
            At PROOF, we’re no strangers to building with utility in mind. That’s why every Moonbird is also your key to our private PROOF Discord – where
            you’ll have admittance to our gated Parliament channels. Once inside, you will have exclusive access to Moonbird-related drops, Parliament meetups
            and IRL events, and access to upcoming PROOF projects; including the PROOF metaverse, codenamed Highrise.
          </div>
          <div className='col-md-6 p-5'>
            <img src='http://localhost:3000/images/door.png' alt='' className='w-100' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
