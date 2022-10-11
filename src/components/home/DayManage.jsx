import React, { useEffect, useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useSelector } from "react-redux";
import { useAddNamazMutation } from "../../features/namaz/namazApi";
import { dateFormat } from "../../utils/dateFormat";

const DayManage = () => {
  const { email } = useSelector((state) => state.auth.user);

  const [addNamaz, { data, error: responseError }] = useAddNamazMutation();

  const [selectedDay, setSelectedDay] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  useEffect(() => {
    if (data) {
      console.log("DayManage - addNamaz data:", data);
    }
    if (responseError) {
      console.log("DayManage - addNamaz error:", responseError);
    }
  }, [data, responseError]);

  const namazAdd = (selectedDate) => {
    const formattedDate = dateFormat(selectedDate);
    addNamaz({
      date: formattedDate,
      email,
    });
  };

  const handleChange = async (selectedDate) => {
    setSelectedDay(selectedDate);
    namazAdd(selectedDate);
  };

  const highlightDay = [
    {
      year: 2022,
      month: 10,
      day: 4,
      className: "purpleDay",
    },
    {
      year: 2022,
      month: 10,
      day: 12,
      className: "orangeDay",
    },
    {
      year: 2022,
      month: 10,
      day: 18,
      className: "yellowDay",
    },
    {
      year: 2022,
      month: 10,
      day: 20,
      className: "greenDay",
    },
    {
      year: 2022,
      month: 10,
      day: 26,
      className: "navyBlueDay",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <Calendar
        value={selectedDay}
        onChange={handleChange}
        shouldHighlightWeekends
        calendarClassName="date-picker md:text-xs rounded-xl bg-white"
        // customDaysClassName={highlightDay}
      />
    </div>
  );
};

export default DayManage;
