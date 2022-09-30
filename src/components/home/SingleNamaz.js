import React from "react";

const SingleNamaz = () => {
  return (
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
  );
};

export default SingleNamaz;
