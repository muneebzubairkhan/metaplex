import React from "react";

function Nesting() {
  return (
    <div className='container-fluid py-4 nesting'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 p-5'>
            <img src='http://localhost:3000/images/nesting.png' alt='' className='w-100' />
          </div>
          <div className='col-md-6 p-5 text-white d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-green section__heading mb-4'>Nesting your Moonbird</h1>
            Moonbirds come with a unique PFP design that allows them to be locked up and nested without leaving your wallet. As soon as your Moonbird is nested,
            they’ll begin to accrue additional benefits. As total nested time accumulates, you’ll see your Moonbird achieve new tier levels, upgrading their
            nest. Upgraded nests enable enhanced drops and rewards.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nesting;
