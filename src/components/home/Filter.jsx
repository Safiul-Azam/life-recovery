import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(7);

  return (
    <div className="absolute top-[50vh] right-0 mr-1 ">
      <div className="rounded-xl flex justify-center items-start gap-2">
        <select
          onChange={(e) => setSelected(e.target.value)}
          onBlur={() => setOpen(false)}
          className={`select select-bordered select-primary mt-3 ${
            !open && "hidden"
          }`}
        >
          <option>7</option>
          <option>15</option>
          <option>30</option>
        </select>
        <div
          onClick={() => setOpen(!open)}
          className="bg-primary hover:bg-secondary text-secondary hover:text-primary text-2xl hover:text-3xl rounded-full p-2 pt-0 h-fit text-center"
        >
          <div className="text-lg flex flex-col justify-center items-center">
            <span className="h-0">{selected}</span>
            <br />
            <span className="h-0">D</span>
            <br />
            <span className="h-0">A</span>
            <br />
            <span className="h-0">Y</span>
            <br />
          </div>
          <BiFilterAlt className="-ml-[0.5px] -mb-[1px] " />
        </div>
      </div>
    </div>
  );
};

export default Filter;
