import React from "react";
import Banner from "../components/home/Banner";
import Calculations from "../components/home/Calculations";
import Filter from "../components/home/Filter";

const Home = () => {
  return (
    <main className=" bg-[#0b1121] pb-20 relative">
      <Banner />
      <Calculations />
      <Filter />
    </main>
  );
};

export default Home;
