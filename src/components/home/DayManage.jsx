import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useAddNamazMutation } from "../../features/namaz/namazApi";
import { toDay } from "../../features/namaz/namazSlice";
import auth from "../../firebase.init";
import { dateFormat } from "../../utils/dateFormat";

const DayManage = () => {
  const date = useSelector((state) => state.namaz.date);
  const [addNamaz, { isSuccess }] = useAddNamazMutation();
  const [selectedDay, setSelectedDay] = useState(date);

  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const namazAdd = (date, email) => {
    const formattedDate = dateFormat(date);
    addNamaz({
      data: {
        date: formattedDate,
        email,
      },
    });
  };

  useEffect(() => {
    if (date?.day) {
      setSelectedDay(date);
      namazAdd(date, user?.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, user]);

  const handleChange = (date) => {
    dispatch(toDay({ date, email: user?.email }));
    namazAdd(date, user?.email);
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
