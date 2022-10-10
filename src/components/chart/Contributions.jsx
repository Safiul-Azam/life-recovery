import React from "react";
import Calendar from "react-github-contribution-calendar";

const Contributions = () => {
  var values = {
    "2022-04-23": 1,
    "2022-06-26": 2,
    "2022-09-29": 3,
    "2022-10-9": 4,
    "2022-11-08": 4,
    "2022-10-12": 2,
    "2022-10-13": 5,
    "2022-10-14": 4,
    "2022-10-15": 3,
    "2022-10-17": 5,
    "2022-10-18": 3,
  };
  var panelColors = [
    "#EBEDF0",
    "rgba(196, 46, 0, 0.822)",
    "rgb(251, 255, 0)",
    "rgb(138, 115, 255)",
    "rgba(1, 48, 177, 0.815)",
    "rgb(25, 202, 2)",
  ];
  var until = "2022-12-30";
  var weekNames = ["s", "m", "t", "w", "t", "f", "s"];
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
  var monthLabelAttributes = {
    style: {
      "font-size": 14,
      "alignment-baseline": "central",
      margin: "20px",
      fill: "#AAA",
    },
  };
  var panelAttributes = { rx: 6, ry: 2 };
  var weekLabelAttributes = {
    style: {
      "font-size": 14,
      "alignment-baseline": "central",
      fill: "#AAA",
    },
  };

  return (
    <div className="my-20 max-w-5xl mx-auto bg-[#162033] ">
      <h2 className="text-xl mb-3 text-white text-center">
        Contributions Graph
      </h2>
      <div className="flex justify-center items-center">
        <div className=" w-full mx-auto flex justify-center rounded-2xl">
          <Calendar
            values={values}
            panelColors={panelColors}
            panelAttributes={panelAttributes}
            until={until}
            weekNames={weekNames}
            monthLabelAttributes={monthLabelAttributes}
            monthNames={monthNames}
            weekLabelAttributes={weekLabelAttributes}
            className=""
          />
        </div>
      </div>
      <div className="flex items-center space-x-1 mt-2 justify-end">
        <p className="text-white text-sm">Less</p>
        <p className="w-3 h-3 bg-green-300"></p>
        <p className="w-3 h-3 bg-[#FBFF00]"></p>
        <p className="w-3 h-3 bg-[#052D99]"></p>
        <p className="w-3 h-3 bg-[#8A73FF]"></p>
        <p className="w-3 h-3 bg-[#19CA02]"></p>
        <p className="text-sm text-white">More</p>
      </div>
    </div>
  );
};

export default Contributions;
