import React from "react";
import Calendar from "react-github-contribution-calendar";

const Contributions = () => {
  var values = {
    '2016-06-23': 1,
    '2016-06-26': 2,
    '2016-06-27': 3,
    '2016-06-28': 4
  };
  var panelColors = [
    '#ffffff',
    '#9BE9A8',
    '#40C463',
    '#30A14E',
    '#216E39',
  ];
  var until = "2016-12-30";
  var weekNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className=" my-20">
      <div className="flex justify-center">
        <Calendar
          values={values}
          panelColors={panelColors}
          until={until}
          weekNames={weekNames}
          monthNames={monthNames}
        />
      </div>
    </div>
  );
};

export default Contributions;
