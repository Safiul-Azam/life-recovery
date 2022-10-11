import React, { useEffect, useState } from "react";
import Calendar from "react-github-contribution-calendar";
import { useSelector } from "react-redux";
import { dateFormatRevers } from "../../utils/dateFormat";

const Contributions = () => {
  const allData = useSelector((state) => state.filter.allDataByDate);

  const [dates, setDates] = useState({});

  useEffect(() => {
    if (allData.length !== 0) {
      setDates(allData.reduce((r, c) => Object.assign(r, c), {}));
    }
  }, [allData]);

  /* 
  {
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
  }
  */

  const values = dates;

  const panelColors = [
    "#ffffff2f", // default color
    "#ff0000", // value = 0
    "#fc754cd2", // value = 1
    "#FBFF00", // value = 2
    "#00eeff", // value = 3
    "#003cff", // value = 4
    "#1eff00", // value = 5
  ];
  const until = dateFormatRevers({});
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
    <div className="my-20 max-w-7xl px-10 mx-auto">
      <h2 className="text-xl py-3 text-white text-center bg-[#162033] rounded-xl rounded-b-none">
        Contributions Graph
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-16 sm:gap-3 px-5 pb-2 bg-[#162033] rounded-xl rounded-t-none  w-full">
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
          <div className="flex items-center space-x-1 mt-2 justify-center md:justify-start text-slate-200 text-sm px-4">
            <p className="w-3 h-3 rounded-full bg-[#ff0000]"></p>
            <span className="pr-1.5"> - 0</span>
            <p className="w-3 h-3 rounded-full bg-[#fc754cd2]"></p>
            <span className="pr-1.5"> - 1</span>
            <p className="w-3 h-3 rounded-full bg-[#FBFF00]"></p>
            <span className="pr-1.5"> - 2</span>
            <p className="w-3 h-3 rounded-full bg-[#00eeff]"></p>
            <span className="pr-1.5"> - 3</span>
            <p className="w-3 h-3 rounded-full bg-[#003cff]"></p>
            <span className="pr-1.5"> - 4</span>
            <p className="w-3 h-3 rounded-full bg-[#1eff00]"></p>
            <span className="pr-1.5"> - 5</span>
          </div>
        </div>
        <div className="sm:w-7/12 h-full flex flex-col-reverse md:flex-row items-center justify-around -mt-7 md:-mt-10 text-slate-200 gap-1 md:gap-5">
          {/* Longest Streak */}
          <div className="md:bg-[#1d2a42] md:px-5 flex justify-center items-center rounded-lg md:py-5 text-center">
            <h1 className="md:text-lg">Longest Streak</h1>{" "}
            <span className="text-lg md:text-2xl text-secondary font-semibold pl-1 md:pl-2">
              0
            </span>
          </div>

          {/* Current Streak */}
          <div className="flex flex-col justify-center items-center">
            <div className="ring-4 ring-primary p-2 py-2 rounded-full w-fit">
              <div
                className="radial-progress"
                style={{
                  "--value": "0",
                  "--size": "6rem",
                  "--thickness": "0.5rem",
                }}
              >
                <span className="text-secondary text-4xl">0</span>
              </div>
            </div>

            <div className="flex justify-center items-center rounded-lg text-center pt-3">
              <h1 className="md:text-lg">Current Streak </h1>{" "}
              <span className="text-lg md:text-2xl text-secondary font-semibold pl-1 md:pl-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
