import React from "react";
import banner from "../../images/banner1.png";
import Navbar from "../Shared/Navbar";
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
    <section className="pt-6 pb-10 min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-10 min-h-[90vh] my-auto px-10 mt-16 md:mt-0">
        <DayManage />
        <Namaz />
      </div>
    </section>
  );
};

export default Banner;
