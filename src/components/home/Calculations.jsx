import React, { useState } from "react";
import Calculation from "./Calculation";

const Calculations = () => {
  const [selectedNamaz, setSelectedNamaz] = useState("ফজর")

  const namazName = ["ফজর", "যোহর", "আসর", "মাগরিব", "এশা"];

  return (
    <section className="max-w-7xl px-10 mx-auto">
      <div className="flex gap-1 justify-center items-center content-center mt-16 mb-5">
        {namazName.map((namaz, index) => (
          <h6 key={index}
            onClick={() => setSelectedNamaz(namaz)}
            className={`px-4 py-2 btn ${
              selectedNamaz === namaz
                ? "btn-secondary text-primary"
                : "btn-primary text-secondary"
            } `}
          >
            {namaz}
          </h6>
        ))}
      </div>
      <div className="flex flex-col gap-10 justify-center items-center content-center">
        <Calculation namaz={selectedNamaz} />
      </div>
    </section>
  );
};

export default Calculations;
