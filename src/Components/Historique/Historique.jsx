import React from "react";
import "./Grid.css";

const Historique = () => {
  return (
    <section className="grid-container">
      <div className="grid-item relative md-col-span-2">
        <img src="../../Assets/House (1).png" alt="" className="grid-image" />
        <span className="grid-content absolute bottom-8 left-4">
          <p className="grid-number text-white md-text-5xl text-2xl font-semibold pb-3">
            216
          </p>
          <p className="grid-location text-white lg-text-xl md-text-base text-sm">
            New York City, NY
          </p>
        </span>
      </div>
      <div className="grid-item relative md-col-span-2">
        <img src="../../Assets/House (1).png" alt="" className="grid-image" />
        <span className="grid-content absolute bottom-8 left-4">
          <p className="grid-number text-white md-text-5xl text-2xl font-semibold pb-3">
            141
          </p>
          <p className="grid-location text-white lg-text-xl md-text-base text-sm">
            Houston, TX
          </p>
        </span>
      </div>
      <div className="grid-item relative md-col-span-3">
        <img src="../../Assets/House (1).png"  alt="" className="grid-image" />
        <span className="grid-content absolute bottom-8 left-4">
          <p className="grid-number text-white md-text-5xl text-2xl font-semibold pb-3">
            212
          </p>
          <p className="grid-location text-white lg-text-xl md-text-base text-sm">
            San Diego, CA
          </p>
        </span>
      </div>
      <div className="grid-item relative md-col-span-3">
        <img src="../../Assets/House (1).png"  alt="" className="grid-image" />
        <span className="grid-content absolute bottom-8 left-4">
          <p className="grid-number text-white md-text-5xl text-2xl font-semibold pb-3">
            183
          </p>
          <p className="grid-location text-white lg-text-xl md-text-base text-sm">
            Philadelphia, PA
          </p>
        </span>
      </div>
      <div className="grid-item relative md-col-span-4">
        <img src="../../Assets/House (1).png"  alt="" className="grid-image" />
        <span className="grid-content absolute bottom-8 left-4">
          <p className="grid-number text-white md-text-5xl text-2xl font-semibold pb-3">
            112
          </p>
          <p className="grid-location text-white lg-text-xl md-text-base text-sm">
            San Francisco, CA
          </p>
        </span>
      </div>
    </section>
  );
};

export default Historique;
