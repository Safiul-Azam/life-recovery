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
  const until = "2022-10-15";
  const weekNames = ["", "M", "", "W", "", "F", ""];
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
      fontSize: 12,
      alignmentBaseline: "central",
      fill: "#ffffff",

    },
  };
  const panelAttributes = { rx: 6, ry: 6 };
  const weekLabelAttributes = {
    rotate: 20,

    style: {
      fontSize: 12,
      alignmentBaseline: "central",
      fill: "#ffffff",
    },
  };

  return (
    <div className="my-20 max-w-7xl sm:px-10 mx-auto  px-5">
      <h2 className="text-xl py-3 text-white text-center bg-[#162033] rounded-xl rounded-b-none">
        Contributions Graph
      </h2>
      <div className="flex justify-center items-center gap-3 px-5 pb-2 bg-[#162033] rounded-xl rounded-t-none">
        <div className="flex flex-col justify-start w-full">
          <Calendar
            values={values}
            panelColors={panelColors}
            panelAttributes={panelAttributes}
            until={until}
            monthNames={monthNames}
            monthLabelAttributes={monthLabelAttributes}
            weekNames={weekNames}
            weekLabelAttributes={weekLabelAttributes}
          />
          <div className="flex items-center space-x-1 mt-2 justify-start text-slate-200 text-sm px-4">
            <p className="w-3 h-3 rounded-full bg-[#ff0000]"></p>
            <span> = 0</span>
            <p className="w-3 h-3 rounded-full bg-[#fc754cd2]"></p>{" "}
            <span> = 1</span>
            <p className="w-3 h-3 rounded-full bg-[#FBFF00]"></p>{" "}
            <span> = 2</span>
            <p className="w-3 h-3 rounded-full bg-[#00eeff]"></p>{" "}
            <span> = 3</span>
            <p className="w-3 h-3 rounded-full bg-[#003cff]"></p>{" "}
            <span> = 4</span>
            <p className="w-3 h-3 rounded-full bg-[#1eff00]"></p>{" "}
            <span> = 5</span>
          </div>
        </div>
        <div className="bg-white w-4/12 h-full">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
