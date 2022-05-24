import React from "react";

function Copyright() {
  return (
    <div className="copyright container p-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="copyright_head">
            <span></span>
            <div className="d-flex align-items-center justify-content-center">
              <img src={`${window.location.origin}/images/globe.svg`} alt="" />
            </div>
            <span></span>
          </div>
          <div className="row">
            <div className="col-md-3">
              {/* <img src={`${window.location.origin}/images/proof.svg`} alt="" /> */}
              {/* <p className="text-gray">© 2022 PROOF Holdings</p> */}
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <p className="text-gray" style={{ fontSize: 14 }}>
                Follow along for updates:
              </p>
              <div className="d-flex social-icons">
                <a href="https://twitter.com/" className="px-1">
                  <img
                    src={`${window.location.origin}/images/twitter.svg`}
                    alt=""
                    style={{ height: 20 }}
                  />
                </a>
                <a href="https://discord.com/" className="px-1">
                  <img
                    src={`${window.location.origin}/images/discord.svg`}
                    alt=""
                    style={{ height: 20 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
