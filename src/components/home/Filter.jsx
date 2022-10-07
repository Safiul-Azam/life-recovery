import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useGetNamazsQuery } from "../../features/namaz/namazApi";
import { pastDays } from "../../utils/pastDays";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("৭");
  const email = useSelector((state) => state.auth.user.email);
  const namaz = useSelector((state) => state.namaz.namaz[0]);

  const prvDays = pastDays(7);

  const { refetch } = useGetNamazsQuery({
    email,
    date: prvDays,
  });

  useEffect(() => {
    // refetch()
  }, [namaz, refetch]);

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
