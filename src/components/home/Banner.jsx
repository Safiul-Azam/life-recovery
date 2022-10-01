import React from "react";
import Navbar from "../Shared/Navbar";
import Calculate from "../chart/Calculate";
import ComposedCharts from "../chart/ComposedCharts";
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
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center max-w-7xl mx-auto gap-10 min-h-[50vh] pt-16 md:mt-0">
        <DayManage />
        <Namaz />
        <ComposedCharts />
        <Calculate />
      </div>
    </section>
  );
};

export default Banner;
