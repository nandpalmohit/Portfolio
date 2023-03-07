import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import PopupModal from "../Modules/PopupModal";

const Portfolio = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const windowWidth = useRef(window.innerWidth);

  var projectsPerPage = 3;
  // slide settings for slidesToShow numbers
  if (windowWidth.current > 992) {
    projectsPerPage = 3;
  } else if (windowWidth.current > 767) {
    projectsPerPage = 2;
  } else if (windowWidth.current <= 767) {
    projectsPerPage = 2;
  }

  const projects = [
    {
      id: 3,
      name: "Team - Hire Top Talents",
      role: "Website / Frontend Development / Backend Development",
      thumbImg: "/assets/projects/team2.png",
      frontend: "HTML • CSS • JS • Bootstrap 5 • ReactJS ",
      backend: "PHP • Laravel 9 • MySQL",
      custom: "Admin Panel • Frontend View • Company Panel • RESTAPI",
      integration:
        "Multi Vendor System / Company Based Dashboard / Single Page Website / Custom Search Filter ",
      team: "1 Members",
      duration: "2 Months",
      completion: "20th, February, 2023",
      link: null,
      desc: [
        "As a dedicated developer, my primary responsibility is to plan, design, fulfill requirements, development, and maintain the project.",
        "Implement an admin panel in Laravel 9 using custom theme development and create a multi-vendor system in which multiple companies are invited to build candidates that are hired by other companies. Implement a front that assists businesses and individuals in finding the best hiring employees for them.",
        "Create restful APIs to communicate with databases using react js and laravel technologies. Create a single-page application for the front end to solve the problem of filtering a large amount of data. Planning to implement a safe and strong relationship-building mode.",
        "Develop the project using frontend development such as HTML5, CSS3, Reactjs V.18, RESTAPI’s, and backend technologies such as Laravel 9, and MySQL for database communication.",
      ],
    },
    {
      id: 2,
      name: "iProperty - Buy / Sell / Rent",
      role: "Frontend Development / Backend Development / RESTAPI",
      thumbImg: "/assets/projects/iproperty2.png",
      frontend: "HTML • CSS • JS • Bootstrap 4",
      backend: "PHP • Laravel 8 • MySQL",
      custom: "Admin Panel • Frontend View • Agent Panel • RESTAPI",
      integration: "Shipping Method • Discount Coupon • Subscription Modal",
      team: "1 Members",
      duration: "3 Months",
      completion: "17th, December, 2023",
      link: null,
      desc: [
        "As a dedicated developer, my primary responsibility is to plan, design, fulfill requirements, development, and maintain the project.",
        "With Laravel 8, implement a real estate-based project that is purely plugin-based scripts that help manage properties, lands, amenities, key features, blogs & news.",
        "Implement a multi-vendor system for managing system administrators, agents, and users. RESTAPI helps to build applications and interact with databases.",
        "Implement Google Maps with custom layers and draw polygons over the map to contain the data of lands and properties using lat and long coordinates.",
        "Develop the project using frontend development such as HTML, CSS, JS, Bootstrap 4, and backend technologies such as Laravel 8, and MySQL for database communication.",
      ],
    },
    {
      id: 1,
      name: "Mystaa - A Sustainable Shop",
      role: "Backend Support / Shipping Integration / Coupon Integration",
      thumbImg: "/assets/projects/mystaa2.png",
      frontend: "HTML • CSS • JS • Bootstrap 4",
      backend: "PHP • Laravel 8 • MySQL",
      custom: "Admin Panel • Frontend View • Vendor Panel",
      integration: "Shipping Method • Discount Coupon",
      team: "3 Members",
      duration: "2 Months",
      completion: "28th, September, 2022",
      link: "https://www.mystaa.com",
      desc: [
        "Responsibilities include implementing a shipping method using Nimbus POST, which includes RESTAPIs that enable in-shipment tracking.",
        "Implement a pricing section that involves a price, a selling price, and a special price with a discount for the customers.",
        "Implement other small modules for support.",
      ],
    },
  ];

  const [modalData, setModalData] = useState(projects);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: projectsPerPage,
    slidesToScroll: 1,
    arrows: false,
  };

  const popupManager = (id) => {
    setTimeout(() => {
      setModalData(projects.filter((data) => data.id == id));
      setModalIsOpen(true);
    }, 100);
  };

  return (
    <>
      <div
        className={`container-fluid projects ${
          ModalIsOpen == true ? "vs-none" : ""
        }`}
        id="projects"
      >
        <div className="row mx-auto justify-content-center">
          <div className="col-sm-12 col-md-8 mb-5">
            <div
              className="sc-subtitle text-center"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
            >
              Portfolio
            </div>
            <div
              className="sc-title text-center"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="200"
              data-aos-easing="ease-out"
            >
              My Projects
            </div>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10 col-xl-8 mt-5">
            <Slider {...settings}>
              {projects.map((pr, index) => (
                <div key={pr.id}>
                  <div className="project-card">
                    <div
                      className="project-img"
                      data-aos="fade-in"
                      data-aos-delay="500"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-easing="ease-in"
                    >
                      <img src={pr.thumbImg} width="100%" />
                    </div>
                    <div
                      className="project-content"
                      data-aos-delay="600"
                      data-aos="fade-in"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-easing="ease-in"
                    >
                      <a
                        className="project-title"
                        onClick={() => popupManager(pr.id)}
                      >
                        {pr.name}
                      </a>
                      <div className="project-role">{pr.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {ModalIsOpen == true ? (
        <PopupModal data={modalData[0]} setModalIsOpen={setModalIsOpen} />
      ) : (
        ""
      )}
    </>
  );
};

//

export default Portfolio;
