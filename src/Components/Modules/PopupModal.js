import React from "react";

const PopupModal = ({ data, setModalIsOpen }) => {
  return (
    <div className="popupModal">
      <div className="container projects-popup">
        <div className="row px-4">
          <div className="col-sm-12 pt-2 pb-1 text-end">
            <button
              className="popup-close-btn"
              onClick={() => setModalIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="col-sm-12 text-left">
            <div className="popup-title">{data.name}</div>
            {data?.desc.map((content, index) => (
              <div className="popup-desc" key={index}>
                {content}
              </div>
            ))}
          </div>
          <div className="col-sm-12 img-wrap">
            <img src={data.thumbImg} alt="" />
          </div>
          <div className="col-sm-12 col-md-6 tech-wrap">
            <div className="label">Frontend Development:</div>
            <div className="value">{data.frontend ?? "Unavailable"} </div>
            <div className="label">Custom Development:</div>
            <div className="value">{data.custom ?? "Unavailable"}</div>
            <div className="label">Team Members:</div>
            <div className="value">{data.team ?? "Unavailable"} </div>
            <div className="label">Role:</div>
            <div className="value">{data.role ?? "Unavailable"} </div>
          </div>
          <div className="col-sm-12 col-md-6 tech-wrap">
            <div className="label">Backend Technologies:</div>
            <div className="value">{data.backend ?? "Unavailable"} </div>
            <div className="label">Integration:</div>
            <div className="value">{data.integration ?? "Unavailable"} </div>
            <div className="label">Duration:</div>
            <div className="value">{data.duration ?? "Unavailable"} </div>
            <div className="label">Link:</div>
            <div className="value">
              <a href={data.link ?? "#"} target="_blank">
                {data.link ?? "Unavailable"}{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
