import React from "react";
import Navbar from "../Shared/Navbar";
import Calculate from "./Calculate";
import ComposedCharts from "./ComposedCharts";
import DayManage from "./DayManage";
import Namaz from "./Namaz";

const Banner = () => {
  /* 
  style={{
        background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
  */
  return (
    <section className="pt-6 min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-10 min-h-[50vh] px-10 mt-16 md:mt-0">
        <DayManage />
        <Namaz />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 max-w-7xl px-10 mx-auto">
        <ComposedCharts />
        <Calculate />
      </div>
    </section>
  );
};

export default Banner;
