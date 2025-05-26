import React from "react";
import anatomyImage from "../assets/human-body-skeleton-png.png";
import "../styles/AnatomyCard.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-card-container">
      <img
        src={anatomyImage}
        alt="Human Anatomy"
        className="anatomy-card-image"
      />

      <div className="anatomy-label heart">
        <i className="fas fa-heart heart1"></i> Healthy Heart
      </div>

      <div className="anatomy-label leg">
        <i className="fas fa-person-walking leg1"></i> Healthy Leg
      </div>
    </div>
  );
};

export default AnatomySection;
