import React from "react";
import "../styles/UpcomingSchedule.css";
const UpcomingSchedule = () => {
  const schedule = {
    Thursday: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" }
    ],
    Saturday: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧠" }
    ]
  };

  return (
    <div className="upcoming-schedule">
      <h3 className="upcoming-schedule__title">The Upcoming Schedule</h3>

      {Object.entries(schedule).map(([day, events], index) => (
        <div key={index} className="upcoming-schedule__day-section">
          <h4 className="upcoming-schedule__day-title">On {day}</h4>

          <div className="upcoming-schedule__events-grid">
            {events.map((event, idx) => (
              <div key={idx} className="upcoming-schedule__event-card">
                <div className="upcoming-schedule__event-info">
                  <div className="upcoming-schedule__event-title">{event.title}</div>
                  <div className="upcoming-schedule__event-time">{event.time}</div>
                </div>
                <div className="upcoming-schedule__event-icon">{event.icon}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
