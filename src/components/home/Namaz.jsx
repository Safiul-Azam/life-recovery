import React from "react";

const Namaz = () => {
  return (
    <section className="bg-white w-96 h-96 px-5 py-5 flex flex-col gap-3 rounded-xl">
      <h1 className="text-primary text-center text-2xl font-serif font-semibold">
        নামাজের চেকলিস্ট
      </h1>

      <hr className="border-secondary" />

      {/* ফজর */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg text-primary font-semibold">
            ফজর
          </span>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">জামাত</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">তাকবীরে উলা</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>

      {/* যোহর */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg text-primary font-semibold">
            যোহর
          </span>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">জামাত</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">তাকবীরে উলা</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>

      {/* আসর */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg text-primary font-semibold">
            আসর
          </span>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">জামাত</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">তাকবীরে উলা</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>

      {/* মাগরিব */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg text-primary font-semibold">
            মাগরিব
          </span>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">জামাত</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">তাকবীরে উলা</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>

      {/* এশা */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg text-primary font-semibold">
            এশা
          </span>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">জামাত</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="label-text">তাকবীরে উলা</span>
            <input
              type="checkbox"
              checked
              className="checkbox checkbox-xs checkbox-secondary"
            />
          </div>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
    </section>
  );
};

export default Namaz;
