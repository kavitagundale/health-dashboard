import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const items = [
    { icon: "fas fa-chart-line", label: "Dashboard", active: true },
    { icon: "fas fa-clock", label: "History" },
    { icon: "fas fa-calendar-days", label: "Calendar" },
    { icon: "fas fa-user-group", label: "Appointments" },
    { icon: "fas fa-chart-pie", label: "Statistics" },
  ];

  const tools = [
    { icon: "fas fa-comment", label: "Chat" },
    { icon: "fas fa-phone", label: "Support" },
  ];

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">
        <span className="sidebar__title-highlight">Health</span>care.
      </h1>

      <div>
        <p className="sidebar__section-title">General</p>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`sidebar__item ${item.active ? "sidebar__item-active" : ""}`}
          >
            <i className={`${item.icon} sidebar__item-icon`}></i> {item.label}
          </div>
        ))}

        <div className="sidebar__tools">
          <p className="sidebar__section-title-tools">Tools</p>
          {tools.map((tool, idx) => (
            <div key={idx} className="sidebar__item">
              <i className={`${tool.icon} sidebar__item-icon`}></i> {tool.label}
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar__footer">
        <i className="fas fa-gear sidebar__footer-icon"></i> Setting
      </div>
    </div>
  );
};

export default Sidebar;
