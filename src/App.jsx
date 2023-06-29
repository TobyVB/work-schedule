import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const changeMonth = (increment) => {
    const newMonth = currentMonth + increment;
    setCurrentMonth(newMonth);
  };

  const getDatesForMonth = (month) => {
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const numberOfDays =
      lastDayOfMonth.getDate() - firstDayOfMonth.getDate() + 1;
    const dates = [...Array(numberOfDays)].map((_, index) => {
      const date = new Date(year, month, index + 1);
      return date;
    });

    return dates;
  };

  const calendarDates = getDatesForMonth(currentMonth);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [employees, setEmployees] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="horizontal-calendar">
      <div
        className="calendar-header"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3em",
          marginBottom: "3em",
        }}
      >
        <button onClick={() => changeMonth(-1)}>Previous Month</button>
        <h2>
          {calendarDates[0]?.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={() => changeMonth(1)}>Next Month</button>
      </div>
      <div
        className="calendar-days"
        style={{
          display: "flex",
          gap: "2em",
          width: "70vw",
          overflow: "scroll",
        }}
      >
        {calendarDates.map((date, index) => (
          <div key={index} className="calendar-day">
            {/* <div className="month">{date.toLocaleString('default', { month: 'short' })}</div> */}
            <div className="day">{date.getDate()}</div>
            <div className="weekday">{daysOfWeek[date.getDay()]}</div>
            {employees.map((employee) => {
              return <div>{employee.name}</div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
