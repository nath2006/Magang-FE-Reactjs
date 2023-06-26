import React from "react";
import "./styles.css";

const Card = ({ title, description, icon }) => {
  return (
    <div className="Card">
      <div className="card-icon">
        <img src={icon} alt="Service Icon" />
      </div>
      <div className="card-content">
        <h6 className="card-title">{title}</h6>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;