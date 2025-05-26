import React from "react";
import "../styles/CalendarSection.css";

const CalendarSection = () => {
 
  const dates = [
    
    { day: "Mon", date: "25", isActive: false },
    { day: "Tue", date: "26", isActive: true },
    { day: "Wed", date: "27", isActive: false },
    { day: "Thu", date: "28", isActive: false },
    { day: "Fri", date: "29", isActive: false },
    { day: "Sat", date: "30", isActive: false },
    { day: "Sun", date: "31", isActive: false },
  ];

  const timeSlots = [
    "10:00",
    "08:00",
    "10:00",
    "--",
    "14:00",
    "09:00",
    "10:00"
  ];
   const timeSlots1 = [
    "11:00",
    "9.00",
    "10:00",
    "--",
    "14:00",
    "09:00",
    "10:00"
  ];
     const timeSlots2 = [
    "12:00",
    "10:00",
    "--",
    "11:00",
    "14:00",
    "09:00",
    "10:00"
  ];



  const appointments = [
    {
      title: "Dentist",
      time: "09:00–11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
      background: "rgb(47,50,155)",
      textColor: "#ffffff",
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00–12:00",
      doctor: "Dr. Kevin Djones",
      icon: "🧘",
      background: "rgb(216,222,247)",
      textColor: "#0c4a6e",
    },
  ];

  return (
    <div className="calendar-container">
      {/* Header */}
      <div className="calendar-header">
        <div className="calendar-header-info">
          <h3 className="calendar-header-month">October 2021</h3>
          {/* <p className="calendar-header-week">This Week</p> */}
        </div>
        <div className="calendar-header-buttons">
          <button className="calendar-button">Prev</button>
          <button className="calendar-button">Next</button>
        </div>
      </div>

      <div className="calendar-days">
        {dates.map((date, index) => (
          <div key={index} className="calendar-day">
            <div className="calendar-day-name">{date.day}</div>
            <div className={`calendar-date ${date.isActive ? "active" : ""}`}>
              {date.date}
            </div>
            <div className="calendar-time">{timeSlots[index] }</div>
             <div className="calendar-time">{timeSlots1[index]}</div>
              <div className="calendar-time">{timeSlots2[index]}</div>
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="appointments">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="appointment-card"
            style={{ backgroundColor: appt.background, color: appt.textColor }}
          >
            <div className="appointment-icon">{appt.icon}</div>
            <div className="appointment-details">
              <div className="appointment-title">{appt.title}</div>
              <div className="appointment-time">{appt.time}</div>
              <div className="appointment-doctor">{appt.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSection;





