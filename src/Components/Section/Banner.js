import React from "react";
import Icons from "../Modules/Icons";
import resume from "../../cv/Mohit_Nandpal_Resume_2023.pdf";

const Banner = ({ footerLinks }) => {
  return (
    <>
      <div className="container-fluid portfolio">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 px-5 pt-2 portfolio-left">
              <h2
                className="dark bold-500"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                Hello, I'm
              </h2>
              <h1
                className="bold-900 info rem3"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                Mohit Nandpal.
              </h1>
              <h2
                className="bold-500 black"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1200"
                data-aos-offset="0"
              >
                A <span className="primary bold-600">Full Stack Developer</span>{" "}
                From
                <span className="primary bold-600"> India.</span>
              </h2>
              <h4
                className="secondary bold-500 mt-3 pe-5 pt-2 hover"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1800"
                data-aos-offset="0"
              >
                Creating seamless digital experiences from end-to-end
              </h4>

              <a href="#contacts">
                <button
                  type=""
                  className="nm-btn mt-5 btn btn-lg"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="2200"
                  data-aos-offset="0"
                >
                  Let's Connect
                  <i className="ms-3 fa-solid fa-circle-down"></i>
                </button>
              </a>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6 px-5"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2500"
              data-aos-offset="0"
            >
              <div className="profile-img ">
                <img src="/assets/profile-image.png" />
              </div>
            </div>
          </div>
          <div className="portfolio-social">
            {footerLinks.map((footer) => (
              <a className="social-link" key={footer.name} href={footer.link}>
                <i className={footer.icon}></i>
              </a>
            ))}
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
