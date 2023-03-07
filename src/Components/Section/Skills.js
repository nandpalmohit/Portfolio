import React from "react";

const Skills = () => {
  const skillsList = [
    {
      name: "HTML",
      perc: "95%",
      bg: "#e34c26",
    },
    {
      name: "CSS",
      perc: "90%",
      bg: "#2b62f4",
    },
    {
      name: "BOOTSTRAP 5",
      perc: "80%",
      bg: "#563d7c",
    },
    {
      name: "JAVASCRIPT",
      perc: "85%",
      bg: "#edd100",
    },
    {
      name: "REACTJS",
      perc: "80%",
      bg: "#61DBFB",
    },
    {
      name: "NODEJS",
      perc: "70%",
      bg: "#70c408",
    },
    {
      name: "PHP",
      perc: "80%",
      bg: "#8993be",
    },
    {
      name: "LARAVEL",
      perc: "80%",
      bg: "#fb503b",
    },
    {
      name: "MONGODB",
      perc: "75%",
      bg: "green",
    },
    {
      name: "MYSQL",
      perc: "80%",
      bg: "#00758f",
    },
    {
      name: "GITHUB",
      perc: "80%",
      bg: "#171515",
    },
  ];

  return (
    <div className="container-fluid skills" id="skills">
      <div className="row mx-auto justify-content-center">
        <div className="col-sm-12 col-md-8">
          <div
            className="sc-subtitle text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          >
            Advantages
          </div>
          <div
            className="sc-title text-center"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            My Skills
          </div>
        </div>
      </div>
      <div className="row container mx-auto mt-5">
        {skillsList.map((skill, index) => (
          <div className="col-sm-12 col-md-6" key={index}>
            <div className="skills-progress">
              <div className="d-flex justify-content-between">
                <h6
                  className="skills-title"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="300"
                >
                  {skill.name}
                </h6>
                <h6
                  className="skills-subtitle"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="500"
                >
                  {skill.perc}
                </h6>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={skill.perc}
                aria-valuemin="0"
                aria-valuemax="100"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div
                  className="progress-bar"
                  style={{ width: skill.perc, backgroundColor: skill.bg }}
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="800"
                  data-aos-easing="ease-in"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
