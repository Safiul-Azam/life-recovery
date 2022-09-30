import React from "react";
import banner from "../../images/banner1.png";
import Navbar from "../Shared/Navbar";
import DayManage from "./DayManage";
import Namaz from "../../components/home/Namaz";

const Banner = () => {
  return (
    <section
      className="pt-6 min-h-screen "
      style={{
        background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <DayManage />
        <Namaz />
      </div>
    </section>
  );
};

export default Banner;
