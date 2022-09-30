import React from "react";
import Banner from "../components/home/Banner";
import Calculations from "../components/home/Calculations";

const Home = () => {
  return (
    <main className=" bg-[#0b1121] pb-20">
      <Banner />
      <Calculations />
    </main>
  );
};

export default Home;
