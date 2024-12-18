import React from "react";
import Banner from "./banner.mp4";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page-container">
      <video
        src={Banner}
        autoPlay
        loop
        muted
        className="page-video"
      ></video>

      <div className="page-content">
        <p>lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Page1;
