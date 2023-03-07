import React from "react";

const Services = () => {
  const services = [
    {
      name: "Template Development",
      thumbImg: ["/assets/html5.png"],
    },
    {
      name: "Ecommerce Development",
      thumbImg: ["/assets/ecommerce.png"],
    },
    {
      name: "Frontend Development",
      thumbImg: ["/assets/frontend-development.png"],
    },
    {
      name: "Backend Development",
      thumbImg: ["/assets/backend-development.png"],
    },
    {
      name: "RESTAPI Integration",
      thumbImg: ["/assets/restapi.png"],
    },
    {
      name: "Shipping Integration",
      thumbImg: ["/assets/shipping.png"],
    },
  ];

  return (
    <div className="container-fluid services" id="services">
      <div className="row mx-auto justify-content-center">
        <div className="col-sm-12 col-md-12 mb-5">
          <div
            className="sc-subtitle"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-in"
          >
            Services
          </div>
          <div
            className="sc-title"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            Solutions
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div
            className="service-desc"
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
            data-aos-easing="ease-in"
          >
            As a <b className="bold-700 dark">Full stack web developer</b>, I
            value communication, transparency, and timely delivery. I
            collaborate closely with my clients throughout the project lifecycle
            to ensure that their requirements are met, and I provide regular
            updates and progress reports. I offer a flexible and cost-effective
            web development solution that can help businesses of all sizes
            achieve their online goals.
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-sm-6 col-md-6  col-lg-12" key={index}>
                <div
                  className="service-card"
                  data-aos="fade-in"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="500"
                  data-aos-easing="ease-in"
                >
                  <div className="service-img">
                    {service.thumbImg.map((thumbImg, index) => (
                      <img src={thumbImg} key={index} alt="" />
                    ))}
                  </div>
                  <div className="service-name">{service.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
