import React, { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useAddNamazMutation } from "../../features/namaz/namazApi";
import { toDay } from "../../features/namaz/namazSlice";
import { dateFormat } from "../../utils/dateFormat";

const DayManage = () => {
  const dispatch = useDispatch();
  // const [user] = useAuthState(auth);

  const { email } = useSelector((state) => state.auth.user);
  const date = useSelector((state) => state.namaz.date);

  const [addNamaz, { data, isSuccess, isLoading, error: responseError }] =
    useAddNamazMutation();

  const [selectedDay, setSelectedDay] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const namazAdd = (selectedDate) => {
    const formattedDate = dateFormat(selectedDate);
    console.log("selectedDate:", selectedDate);
    console.log("formattedDate:", formattedDate);
    addNamaz({
      date: formattedDate,
      email,
    });
  };

  const handleChange = async (selectedDate) => {
    setSelectedDay(selectedDate);
    console.log(selectedDate);

    namazAdd(selectedDate);
    // console.log({ date: selectedDate, namaz: data })
    // dispatch(toDay({ date: selectedDate, namaz: data }));
  };

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
        onChange={handleChange}
        shouldHighlightWeekends
        calendarClassName="md:text-xs"
        customDaysClassName={highlightDay}
      />
    </div>
  );
};

export default DayManage;
