import React from "react";
import resume from "../../cv/Mohit_Nandpal_Resume_2023.pdf";

const About = () => {
  const services = [
    "Web Development",
    "E-Commerce Development",
    "Social Media App",
    "Chat Messanger App",
    "Team Management Dashboard",
    "Admin Panel Integration",
  ];

  const interests = [
    "Music & Cinema",
    "Treak & Hike",
    "Chess & Cricket",
    "Photography & Dance",
  ];

  const languages = ["English", "Hindi", "Sindhi", "Gujarati"];

  return (
    <div className="container-fluid about" id="about">
      <div className="row mx-auto">
        <div className="col-sm-12">
          <div className="sc-subtitle">About Me</div>
          <div className="sc-title">My Story</div>
        </div>
      </div>
      <div className="row container about-card mx-auto">
        <div className="col-sm-12 col-md-8">
          <h4 className="sans-semibold mb-2 rem1">PERSONAL INFORMATION</h4>
          <div className="row">
            <div className="col-sm-10 pe-2 about-intro">
              Hello there! My name is
              <b className="sans-semibold info"> Mohit Nandpal.</b> I'm a
              full-stack web developer with extensive experience building and
              maintaining complex web applications.
              <br />
              <br />
              As a full-stack developer, I'm passionate about creating elegant,
              scalable, and efficient solutions that provide an exceptional user
              experience. I'm also experienced in database design, Integration,
              and Development, which enables me to build end-to-end solutions
              that are fully integrated and easy to manage.
              <br />
              <br />
              Whether it's building a new application from scratch, optimizing
              an existing codebase, or troubleshooting a complex issue, I have
              the skills and expertise needed to get the job done. I'm committed
              to staying up-to-date with the latest trends and technologies in
              web development, which allows me to deliver cutting-edge solutions
              that meet the needs of my clients and users.
            </div>
            <div className="col-sm-10 mt-3 about-intro">
              <a href={resume} download>
                <button type="" className="btn-download-cv">
                  Download CV
                  <i className="ms-3 fa-solid fa-circle-down"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="row">
            <h4 className="sans-semibold mb-2 rem1">SERVICES</h4>
            {services.map((service, index) => (
              <div
                className="col-sm-12 col-md-12 position-relative"
                key={index}
              >
                <div className="about-service-title">{service}</div>
              </div>
            ))}
          </div>
          <div className="row">
            <h4 className="sans-semibold mt-5 mb-2 rem1">INTERESTS</h4>
            {interests.map((interest, index) => (
              <div
                className="col-sm-12 col-md-12 position-relative"
                key={index}
              >
                <div className="about-service-title">{interest}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;