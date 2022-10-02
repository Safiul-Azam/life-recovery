import React from "react";
import { useSelector } from "react-redux";
import { useGetNamazQuery } from "../../features/namaz/namazApi";
import { dateFormat } from "../../utils/dateFormat";

const Namaz = () => {
  const namaz = useSelector((state) => state.namaz);
  // const formatDate = dateFormat(date);

  // const { data } = useGetNamazQuery({
  //   email: email || "salman@mail.com",
  //   date: formatDate,
  // });

  console.log(namaz);

  return (
    <section className="bg-white w-96 h-96 px-5 py-5 rounded-xl">
      <h1 className="text-primary text-center text-2xl font-serif font-semibold py-5 pt-0">
        নামাজের চেকলিস্ট
      </h1>

      <hr className="border-secondary" />

      <div className=" flex flex-col gap-7 pt-5">
        {" "}
        {/* ফজর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              ফজর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* যোহর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              যোহর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* আসর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              আসর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* মাগরিব */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              মাগরিব
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* এশা */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              এশা
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
      </div>

      {/* <hr className="border-secondary mt-4" /> */}
    </section>
  );
};

export default Namaz;
