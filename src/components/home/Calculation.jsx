import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TwoSimplePieChart from "../chart/TwoSimplePieChart";

const Calculation = ({ namaz }) => {
  const allData = useSelector((state) => state.filter.avg);
  const [data, setData] = useState({});

  useEffect(() => {
    if (allData.length !== 0) {
      const seletedData = allData.find((e) => e.namaz === namaz);
      setData(seletedData);
    }
  }, [allData, namaz]);

  const { namaz: name, jamaat, takbir_e_ula, count, days } = data || {};

  return (
    <section className="max-w-7xl mx-auto ">
      <h1 className="text-primary text-2xl font-semibold font-mono w-full pb-2 text-center mb-3">
        {namaz}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center items-center gap-3">
        {/* নামাজ */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-slate-900 w-full lg:w-72 rounded-xl px-2 py-2">
          <h2 className="text-center text-slate-100 font-bold m-3 md:m-0">নামাজ</h2>

          <TwoSimplePieChart name={name} count={count} days={days} />
        </div>

        {/* কাজা নামাজ */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-slate-900 w-full lg:w-72 rounded-xl px-2 py-2">
          <h2 className="text-center text-slate-100 font-bold px-2 m-3 md:m-0">
            কাজা নামাজ
          </h2>

          <TwoSimplePieChart name={name} count={count} days={days} kaja />
        </div>

        {/* জামাতে পড়েছেন  */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-slate-900 w-full lg:w-72 rounded-xl px-2 py-2">
          <h2 className="text-center text-slate-100 font-bold m-3 md:m-0">
            জামাতে পড়েছেন
          </h2>

          <TwoSimplePieChart name={name} count={jamaat} days={days * 5} />
        </div>

        {/* তাকবীরে উলার সাথে পড়েছেন */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-slate-900 w-full lg:w-72 rounded-xl px-2 py-2">
          <h2 className="text-center text-slate-100 font-bold m-3 md:m-0">
            তাকবীরে-উলার সাথে পড়েছেন
          </h2>

          <TwoSimplePieChart name={name} count={takbir_e_ula} days={days * 5} />
        </div>
      </div>
    </section>
  );
};

export default Calculation;
