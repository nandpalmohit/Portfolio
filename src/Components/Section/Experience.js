import React from "react";
import MonthsExp from "../Modules/MonthsExp";

const Experience = () => {
  const experiences = [
    {
      position: "Full stack developer",
      date: "November 2022 - Current",
      start_date: new Date("2022-11-21"),
      end_date: new Date(),
      company: "Webcreta Technologies Pvt. Ltd.",
    },
    {
      position: "Frontend developer",
      date: "March 2022 - November 2022",
      start_date: new Date("2022-03-21"),
      end_date: new Date("2022-11-20"),
      company: "Webcreta Technologies Pvt Ltd.",
    },
    {
      position: "Magento Developer",
      date: "October 2021 - November 2021",
      start_date: new Date("2021-10-01"),
      end_date: new Date("2021-11-25"),
      company: "Logicrays Technologies",
    },
    {
      position: "PHP Trainee",
      date: "November 2017 - April 2018",
      start_date: new Date("2017-11-01"),
      end_date: new Date("2018-04-29"),
      company: "Vivacious Web Solutions Pvt. Ltd.",
    },
  ];

  const educations = [
    {
      degree: "Computer Engineering",
      degree_type: "Bachelors of Engineering",
      university: "Gujarat technological University",
      start_date: 2018,
      end_date: 2021,
      college: "Silver Oak College",
    },
    {
      degree: "Computer Engineering",
      degree_type: "Diploma in Engineering",
      university: "Gujarat technological University",
      start_date: 2015,
      end_date: 2018,
      college: "LJ Polytechnic",
    },
  ];

  return (
    <div className="container-fluid experience" id="experience">
      <div className="row mx-auto justify-content-center mb-5">
        <div className="col-sm-12 col-md-12">
          <div className="sc-subtitle">timeline</div>
          <div className="sc-title">Experience</div>
        </div>
        <div className="col-sm-12 col-md-8 mt-5">
          {experiences.map((exp, index) => (
            <div className="row exp-card justify-content-center">
              <div className="col-sm-12 col-md-4 exp-position">
                {exp.position}
              </div>
              <div className="col-sm-12 col-md-4 exp-company">
                {exp.company}
              </div>
              <div className="col-sm-12 col-md-4 exp-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mx-auto justify-content-center mt-5">
        <div className="col-sm-12 col-md-12">
          <div className="sc-subtitle">Study</div>
          <div className="sc-title">Education</div>
        </div>
        <div className="col-sm-12 col-md-8 mt-5">
          {educations.map((edu, index) => (
            <div className="row exp-card justify-content-center">
              <div className="col-sm-12 col-md-4 exp-position">
                {edu.degree_type}
                <small className="d-block bold-500 dark rem075 text-capitalize">
                  {edu.university}
                </small>
              </div>
              <div className="col-sm-12 col-md-3 exp-company">{edu.degree}</div>
              <div className="col-sm-12 col-md-3 exp-date">{edu.college}</div>
              <div className="col-sm-12 col-md-2 exp-month">
                {edu.start_date + "-" + edu.end_date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
