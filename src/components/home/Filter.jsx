import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("৭");

  return (
    <div className="fixed top-[50vh] right-2 z-10">
      <div className="flex justify-center items-center gap-2">
        <select
          onChange={(e) => setSelected(e.target.value)}
          onBlur={() => setOpen(false)}
          className={`select select-bordered select-primary ${
            !open && "hidden"
          }`}
        >
          <option>৭</option>
          <option>১৫</option>
          <option>৩০</option>
        </select>
        <div
          onClick={() => setOpen(!open)}
          className="bg-primary z-10 text-slate-100 text-2xl rounded-lg hover:text-3xl text-center transition delay-100 hover:ring hover:ring-slate-200 hover:ring-opacity-20"
        >
          <div className="text-base flex flex-col gap-2 py-3 px-2 justify-center items-center cursor-pointer">
            <BiFilterAlt />
            <span>{selected}</span>
            <span>দিন</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
