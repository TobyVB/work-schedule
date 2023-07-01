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

  const [employees, setEmployees] = useState([
    { name: "Rick", offDay: ["Sun", "Sat"], offShift: "night " },
    { name: "Other Person", offDay: ["Sun", "Sat"], offShift: "morning " },
    { name: "Ms. Shay", offDay: ["Sun", "Sat"], offShift: "night " },
    { name: "another other", offDay: ["Sun", "Sat"], offShift: "night " },
    { name: "chris?", offDay: [], offShift: "morning " },
    { name: "christen", offDay: [], offShift: "night " },
  ]);

  // Ok start of with 3 example shifts
  // morning, midday, and night
  // Each day needs it's own function

  const [sunday, setSunday] = useState({ morning: 2, midday: 3, night: 1 });
  const [monday, setMonday] = useState({ morning: 3, midday: 5, night: 1 });
  const [tuesday, setTuesday] = useState({ morning: 3, midday: 4, night: 2 });
  const [wednesday, setWednesday] = useState({
    morning: 3,
    midday: 5,
    night: 1,
  });
  const [thursday, setThursday] = useState({ morning: 3, midday: 5, night: 2 });
  const [friday, setFriday] = useState({ morning: 3, midday: 3, night: 1 });
  const [saturday, setSaturday] = useState({ morning: 2, midday: 3, night: 1 });

  function Day(props) {
    //  Depending on the day of the week will need a certain amount of people for each of the shifts

    return employees.map((employee, idx) => {
      if (!employee.offDay.includes(props.day)) {
        return (
          <div style={{ whiteSpace: "nowrap", fontSize: "1.5rem" }} key={idx}>
            {employee.name}
          </div>
        );
      } else {
        return (
          <div style={{ color: "transparent", fontSize: "1.5rem" }} key={idx}>
            text
          </div>
        );
      }
    });
  }

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
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2em",
            marginRight: "22px",
            fontSize: "1.5rem",
            border: "1px solid yellow",
          }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "1em" }}>
            <div className="day">.</div>
            <div className="weekday">.</div>
          </div>
          {employees.map((employee, idx) => {
            return (
              <div
                key={idx}
                style={{
                  whiteSpace: "nowrap",
                  textAlign: "left",
                }}
              >
                {employee.name}
              </div>
            );
          })}
        </div>
        <div
          className="calendar-days"
          style={{
            display: "flex",
            gap: "5em",
            width: "70vw",
            overflow: "scroll",
            border: " 1px solid red",
          }}
        >
          {calendarDates.map((date, index) => (
            <div key={index} className="calendar-day">
              {/* <div className="month">{date.toLocaleString('default', { month: 'short' })}</div> */}
              <div style={{ fontSize: "2rem", marginBottom: "1em" }}>
                <div className="day">{date.getDate()}</div>
                <div className="weekday">{daysOfWeek[date.getDay()]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.65em",
                }}
              >
                <Day date={date} day={daysOfWeek[date.getDay()]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
