import React from "react";

import "../styles/DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      {/* Left side: search + notification */}
      <div className="dashboard-left">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="notification">
          <i className="fas fa-bell"></i>
          <span className="notification-badge"></span>
        </div>
      </div>

      {/* Right side: profile + add button */}
      <div className="dashboard-right">
        <div className="profile-icon">👤</div>
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
