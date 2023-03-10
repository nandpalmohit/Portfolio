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
      <div className="row mx-auto justify-content-center">
        <div className="col-sm-12 col-md-8">
          <div
            className="sc-subtitle text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          >
            About me
          </div>
          <div
            className="sc-title text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            My story
          </div>
        </div>
      </div>
      <div className="row container about-card mx-auto">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h4
            className="sans-semibold mb-2 rem1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="300"
          >
            PERSONAL INFORMATION
          </h4>
          <div className="row">
            <div
              className="col-sm-10 pe-2 about-intro"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
            >
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
            <div
              className="col-sm-10 mt-3 about-intro"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="700"
            >
              <a href={resume} download>
                <button type="" className="btn-download-cv">
                  Download CV
                  <i className="ms-3 fa-solid fa-circle-down"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="row">
            <h4
              className="sans-semibold mb-2 rem1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
            >
              SERVICES
            </h4>
            {services.map((service, index) => (
              <div
                className="col-sm-12 col-md-12 position-relative"
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="700"
              >
                <div className="about-service-title">{service}</div>
              </div>
            ))}
          </div>
          <div className="row">
            <h4
              className="sans-semibold mt-5 mb-2 rem1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="600"
            >
              INTERESTS
            </h4>
            {interests.map((interest, index) => (
              <div
                className="col-sm-12 col-md-12 position-relative"
                key={index}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="800"
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
