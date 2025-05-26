import React from "react";
import "../styles/HealthMetrics.css";

const HealthMetrics = () => {
  const metrics = [
    { icon: "🫁", organ: "Lungs", date: "26 Oct 2021", value: 85, color: "rgb(169,68,71)" },
    { icon: "🦷", organ: "Teeth", date: "26 Oct 2021", value: 90, color: "rgb(147,214,203)" },
    { icon: "🦴", organ: "Bone", date: "26 Oct 2021", value: 75, color: "rgb(254,114,90)" },
  ];

  return (
    <div className="health-metrics">
      {/* <h4 className="calendar-header-week">This Week</h4> */}
      {metrics.map((item, idx) => (
        <div key={idx} className="health-metrics__card">
          <div className="health-metrics__header">
            <div className="health-metrics__organ-info">
              <span className="health-metrics__icon">{item.icon}</span>
              <div>
                <div className="health-metrics__organ-name">{item.organ}</div>
                <div className="health-metrics__date">Date: {item.date}</div>
              </div>
            </div>
            {/* If you want to show item.status, you can add here */}
          </div>

          <div className="health-metrics__progress-bar-bg">
            <div
              className="health-metrics__progress-bar-fill"
              style={{ width: `${item.value}%`, backgroundColor: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;
