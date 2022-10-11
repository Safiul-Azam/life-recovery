import React from "react";
import Calendar from "react-github-contribution-calendar";

const Contributions = () => {
  const values = {
    "2022-10-01": 0 + 1,
    "2022-10-02": 0 + 1,
    "2022-10-03": 1 + 1,
    "2022-10-04": 1 + 1,
    "2022-10-05": 2 + 1,
    "2022-10-06": 2 + 1,
    "2022-10-07": 3 + 1,
    "2022-10-08": 3 + 1,
    "2022-10-09": 4 + 1,
    "2022-10-10": 4 + 1,
    "2022-10-11": 5 + 1,
    "2022-10-12": 5 + 1,
    "2022-10-13": 4 + 1,
    "2022-10-14": 5 + 1,
  };
  const panelColors = [
    "#ffffff2f",
    "#ff0000",
    "#fc754cd2",
    "#FBFF00",
    "#00eeff",
    "#003cff",
    "#1eff00",
  ];
  const until = "2022-12-30";
  const weekNames = ["s", "m", "t", "w", "t", "f", "s"];
  const monthNames = [
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
  const monthLabelAttributes = {
    style: {
      fontSize: 14,
      alignmentBaseline: "central",
      margin: "20px",
      fill: "#ffffff",
    },
  };
  const panelAttributes = { rx: 6, ry: 2 };
  const weekLabelAttributes = {
    style: {
      fontSize: 14,
      alignmentBaseline: "central",
      fill: "#ffffff",
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
        <p className="w-3 h-3 bg-[#ff0000]"></p>
        <p className="w-3 h-3 bg-[#fc754cd2]"></p>
        <p className="w-3 h-3 bg-[#FBFF00]"></p>
        <p className="w-3 h-3 bg-[#00eeff]"></p>
        <p className="w-3 h-3 bg-[#003cff]"></p>
        <p className="w-3 h-3 bg-[#1eff00]"></p>
        <p className="w-3 h-3 bg-[#ffffff]"></p>
        <p className="text-sm text-white">More</p>
      </div>
    </div>
  );
};

export default Contributions;
