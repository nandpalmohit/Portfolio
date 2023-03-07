import React from "react";

const Contact = ({ footerLinks }) => {
  return (
    <div className="container-fluid contacts" id="contacts">
      <div className="row mx-auto justify-content-center">
        <div className="col-sm-12 col-md-8 mb-5">
          <div
            className="sc-subtitle"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-in"
          >
            contact
          </div>
          <div
            className="sc-title"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            Get in touch
          </div>
        </div>
        <div className="col-sm-12 col-md-12 mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 col-lg-3 ">
              <div
                className="contact-title"
                data-aos="fade-zoom-in"
                data-aos-delay="300"
                data-aos-easing="ease-in"
              >
                Let's Connect!
              </div>
              <div
                className="contact-desc"
                data-aos="fade-zoom-in"
                data-aos-delay="500"
                data-aos-easing="ease-in"
              >
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </div>
              <div
                className="contact-card"
                data-aos="fade-zoom-in"
                data-aos-delay="800"
                data-aos-easing="ease-in"
              >
                <div className="contact-icon">
                  <img src="/assets/email2.png" />
                </div>
                <div className="contact-info">
                  <div className="label">Mail me at</div>
                  <div className="content">nandpalmohit@gmail.com</div>
                </div>
              </div>
              <div
                className="contact-card"
                data-aos="fade-zoom-in"
                data-aos-delay="1000"
                data-aos-easing="ease-in"
              >
                <div className="contact-icon">
                  <img src="/assets/phone.png" />
                </div>
                <div className="contact-info">
                  <div className="label">Call me at</div>
                  <div className="content">+91 9537 065067</div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-1 "></div>
            <div className="col-md-8 col-lg-4 ">
              <div className="form-card">
                <div
                  className="row g-4 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay="300"
                  data-aos-easing="ease-in"
                >
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="contactFirstNameInput"
                        placeholder="name@example.com"
                        name="contactFirstName"
                      />
                      <label htmlFor="contactFirstNameInput">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="contactLastNameInput"
                        placeholder="name@example.com"
                        name="contactLastName"
                      />
                      <label htmlFor="contactLastNameInput">Last Name</label>
                    </div>
                  </div>
                </div>
                <div
                  className="row g-4 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay="500"
                  data-aos-easing="ease-in"
                >
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="contactEmailInput"
                        placeholder="name@example.com"
                        name="contactEmail"
                      />
                      <label htmlFor="contactEmailInput">Email Address</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="contactPhoneInput"
                        name="contactPhone"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="contactPhoneInput">Mobile Number</label>
                    </div>
                  </div>
                </div>
                <div
                  className="row g-4 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay="800"
                  data-aos-easing="ease-in"
                >
                  <div className="col-md-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="contactMessageInput"
                        name="contactMessage"
                        style={{ height: "120px" }}
                      ></textarea>
                      <label htmlFor="contactMessageInput">
                        Type Message here ...
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="row px-3 py-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay="1000"
                  data-aos-easing="ease-in"
                >
                  <button type="submit" className="btn-contact">
                    Submit Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row justify-content-center text-center mx-auto">
          <div className="col-sm-12 col-md-10">
            <div className="row mx-auto">
              <div className="col-sm-12 col-md-12 my-1 col-lg-6">
                <div
                  className="footer-content"
                  data-aos="fade-zoom-in"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="1000"
                  data-aos-easing="ease-in"
                >
                  Copyright &copy; <span className="bold-600 black"> 2023</span>{" "}
                  by
                  <span className="bold-600 secondary"> Mohit Nandpal</span>.
                  All rights reserved.
                </div>
              </div>
              <div className="col-sm-12 col-md-12 my-1 col-lg-6">
                <div
                  className="footer-icon"
                  data-aos="fade-zoom-in"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="1000"
                  data-aos-easing="ease-in"
                >
                  {footerLinks.map((footer) => (
                    <a className="social" key={footer.name} href={footer.link}>
                      <i className={footer.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
