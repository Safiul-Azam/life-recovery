import React from "react";
import Banner from "../components/home/Banner";
import Calculations from "../components/home/Calculations";
import Filter from "../components/home/Filter";

const Home = () => {
  return (
    <main className="pb-20 bg-slate-900 relative bg-fixed">
      <div class="fixed right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:right-[10%] lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div class="fixed bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:left-[10%] lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-52 xl:w-[400px]"></div>
      <Banner />
      <Calculations />
      <Filter />
    </main>
  );
};

export default Home;
