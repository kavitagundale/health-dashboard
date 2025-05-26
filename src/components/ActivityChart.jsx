
import React from "react";
import "../styles/ActivityChart.css";

const ActivityChart = () => {
  const data = [
    { day: "Mon", height: "30%", color: "#06b6d4" },
    { day: "Tue", height: "60%", color: "#06b6d4" },
    { day: "Wed", height: "45%", color: "#06b6d4" },
    { day: "Thu", height: "80%", color: "#06b6d4" },
    { day: "Fri", height: "35%", color: "#06b6d4" },
    { day: "Sat", height: "90%", color: "#06b6d4" },
    { day: "Sun", height: "55%", color: "#06b6d4" },
  ];

  return (
    <div className="activity-chart-container">
      <div className="activity-chart-header">
        <h3 className="activity-chart-title">Activity</h3>
        <span className="activity-chart-subtitle">3 appointments this week</span>
      </div>

      {/* Chart bars */}
      <div className="activity-chart-bars">
        {data.map(({ day, height, color }) => (
          <div
            key={day}
            className="activity-chart-bar"
            style={{ height, backgroundColor: color }}
            aria-label={`${day} activity bar`}
          />
        ))}
      </div>

      {/* Day labels */}
      <div className="activity-chart-days">
        {data.map(({ day }) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
