import React from "react";
import Calculation from "./Calculation";

const Calculations = () => {
  return (
    <section className="max-w-7xl px-10 mx-auto">
      <Calculation namaz="ফজর" />
      <Calculation namaz="যোহর" />
      <Calculation namaz="আসর" />
      <Calculation namaz="মাগরিব" />
      <Calculation namaz="এশা" />
      
    </section>
  );
};

export default Calculations;
