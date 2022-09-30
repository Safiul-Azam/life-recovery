import React from "react";
import TwoSimplePieChart from "../chart/TwoSimplePieChart";

const Calculation = () => {
  return (
    <section className="bg-white m-20 rounded-xl p-10 pt-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-primary text-2xl font-semibold font-mono border-b-2 border-secondary w-full pb-2">ফজর</h1>

        <TwoSimplePieChart />
      </div>
      <div>
        <h2>kaja namaz</h2>
      </div>
      <div>
        <h3>7 bay avarage </h3>
        <p>namaz </p>
        <p>jamat </p>
        <p>takbire ula </p>
      </div>
    </section>
  );
};

export default Calculation;
