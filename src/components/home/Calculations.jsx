import React, { useState } from "react";
import Calculation from "./Calculation";

const Calculations = () => {
  const [selectedNamaz, setSelectedNamaz] = useState("ফজর");

  const namazName = ["ফজর", "যোহর", "আসর", "মাগরিব", "এশা"];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-wrap sm:flex-row gap-1 z-10 justify-center items-center content-center mt-16 mb-5">
        {namazName.map((namaz, index) => (
          <h6
            key={index}
            onClick={() => setSelectedNamaz(namaz)}
            className={`px-4 z-10 py-2 btn ${
              selectedNamaz === namaz
                ? "bg-slate-200 hover:bg-slate-300 text-primary"
                : "btn-primary text-slate-100"
            } `}
          >
            {namaz}
          </h6>
        ))}
      </div>
      <div className="px-10">
        <div className="flex flex-col gap-10 justify-center items-center content-center  backdrop-blur-sm rounded-xl py-8 px-5 bg-slate-800/[0.5]">
          <Calculation namaz={selectedNamaz} />
        </div>
      </div>
    </section>
  );
};

export default Calculations;
