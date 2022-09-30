import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const DayManage = () => {
  const toDay = new Date();

  const [selectedDay, setSelectedDay] = useState({
    year: toDay.getFullYear(),
    month: toDay.getMonth() + 1,
    day: toDay.getDate(),
  });

  const highlightDay = [
    {
      year: 2022,
      month: 9,
      day: 4,
      className: "purpleDay",
    },
    {
      year: 2022,
      month: 9,
      day: 12,
      className: "orangeDay",
    },
    {
      year: 2022,
      month: 9,
      day: 18,
      className: "yellowDay",
    },
    {
      year: 2022,
      month: 9,
      day: 20,
      className: "greenDay",
    },
    {
      year: 2022,
      month: 9,
      day: 26,
      className: "navyBlueDay",
    },
  ];

  return (
    <div className=" rounded-xl flex justify-center items-center">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        calendarClassName="responsive-calendar"
        customDaysClassName={highlightDay}
      />
    </div>
  );
};

export default DayManage;
