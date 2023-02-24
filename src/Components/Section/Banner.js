import React from "react";
import Icons from "../Modules/Icons";
import resume from "../../cv/Mohit_Nandpal_Resume_2023.pdf";

const Banner = () => {
  return (
    <>
      <div className="container-fluid portfolio">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 px-5 pt-2 portfolio-left">
              <h2 className="dark bold-500">Hello, I'm</h2>
              <h1 className="bold-900 info rem3">Mohit Nandpal.</h1>
              <h2 className="bold-500 black">
                A <span className="primary bold-600">Full Stack Developer</span>{" "}
                From
                <span className="primary bold-600"> India.</span>
              </h2>
              <h4 className="secondary bold-500 mt-3 pe-5 pt-2 hover">
                Creating seamless digital experiences from end-to-end
              </h4>

              <a href={resume} download>
                <button type="" className="nm-btn mt-5 btn btn-lg">
                  Download CV
                  <i className="ms-3 fa-solid fa-circle-down"></i>
                </button>
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 px-5">
              <div className="profile-img ">
                <img src="/assets/profile-image.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-down bold-400 text-decoration-none" href="#about">
        <div className="field">
          <div className="scroll"></div>
        </div>
      </a>
    </>
  );
};

export default Banner;
