import React from "react";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      link: "#home",
      id: 1,
    },
    {
      name: "About",
      link: "#about",
      id: 2,
    },
    {
      name: "Skills",
      link: "#skills",
      id: 3,
    },
    {
      name: "Experience",
      link: "#experience",
      id: 3,
    },
    {
      name: "Projects",
      link: "#projects",
      id: 4,
    },
    {
      name: "Services",
      link: "#services",
      id: 5,
    },
    {
      name: "Contact",
      link: "#contacts",
      id: 6,
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid px-5">
          <h4 className="sans-bold me-5 mb-0">Mohit Nandpal</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav sans-medium" id="topNavbar">
              {navLinks.map((data, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" aria-current="page" href={data.link}>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
