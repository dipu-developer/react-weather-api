import React from "react";
import "./style.css";

function Weather() {
  return (
    <>
      <div className="search mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span
            className="input-group-text m"
            id="basic-addon2"
          >
            Search
          </span>
        </div>
      </div>
      <div className="weather">
        <div className="row">
          <div className="col cen">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="row m-0">
            <div className="col-md-8 blk">
              <div className="row">
                <div className="col-6 deg ">
                  <span className="text-white">30.00 &#176;</span>
                </div>
                <div className="col-6 details">
                  <div className="row">
                    <span className="text-white">Cloud</span>
                  </div>
                  <div className="row ">
                    <span className="text-white">Tokyo,JP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rck">
              <div className="row">
                <span className="text-white">22/12/2003</span>
              </div>
              <div className="row">
                <span className="text-white">12:50:20 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row set m-0 ">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-2 mt-3">
                <i className="fa-solid fa-sun"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>15.26</span>
                  <span>Sunset</span>
                </div>
              </div>
              <div className="col-2 mt-3">
                <i className="fa-solid fa-wind"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>15.26</span>
                  <span>Sunset</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row m-0 set">
              <div className="col-2 mt-3">
                <i className="fas fa-tint"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>15.26</span>
                  <span>Sunset</span>
                </div>
              </div>
              <div className="col-2 mt-3">
                <i className="fas fa-cloud-showers-heavy"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>15.26</span>
                  <span>Sunset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
