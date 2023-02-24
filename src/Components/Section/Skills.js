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
      <div className="row mx-auto">
        <div className="col-sm-12">
          <div className="sc-subtitle">skills</div>
          <div className="sc-title">My skills</div>
        </div>
      </div>
      <div className="row container mx-auto mt-5">
        {skillsList.map((skill, index) => (
          <div className="col-sm-6">
            <div className="skills-progress">
              <div className="d-flex justify-content-between">
                <h6 className="skills-title">{skill.name}</h6>
                <h6 className="skills-subtitle">{skill.perc}</h6>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-valuenow={skill.perc}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: skill.perc, backgroundColor: skill.bg }}
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
