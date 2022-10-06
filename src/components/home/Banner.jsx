import React from "react";
import Navbar from "../Shared/Navbar";
import Calculate from "../chart/Calculate";
import ComposedCharts from "../chart/ComposedCharts";
import DayManage from "./DayManage";
import Namaz from "./Namaz";

const Banner = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center max-w-4xl mx-auto gap-10 px-10 pt-16 md:mt-0 z-10">
        <DayManage />
        <Namaz />
        <ComposedCharts />
        <Calculate />
      </div>
    </section>
  );
};

export default Banner;
