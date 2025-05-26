import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import AnatomySection from "./components/AnatomySection";
import HealthMetrics from "./components/HealthMetrics";
import ActivityChart from "./components/ActivityChart";
import CalendarSection from "./components/CalendarSection";
import UpcomingSchedule from "./components/UpcomingSchedule";
import "./index.css";

const App = () => {
  return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <DashboardHeader />
//         <div className="dashboard-body">
//           <div className="left-panel">
//             <div className="anatomy-metrics">
//               <AnatomySection />
//               <HealthMetrics />
//             </div>
//             <ActivityChart />
//           </div>
//           <div className="right-panel">
//             <CalendarSection />
//             <UpcomingSchedule />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


<div className="app-container">
  <Sidebar />
  <div className="main-content">
    <DashboardHeader />
    <div className="dashboard-grid">
      <div className="left-column">
         <div className="dashboard-heading-row">
    <h1 className="dashboard-heading">Dashboard</h1>
    <span className="calendar-header-week">This Week</span>
  </div>
        <div className="anatomy-metrics">
          <AnatomySection />
          <HealthMetrics />
        </div>
        <ActivityChart />
      </div>
      <div className="right-column">
        <CalendarSection />
        <UpcomingSchedule />
      </div>
    </div>
  </div>
</div>
);
 };
export default App;
