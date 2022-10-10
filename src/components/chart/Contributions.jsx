import React, { useState } from "react";

const Contributions = () => {
  const [data, setData] = useState();
  // <div className='w-3 h-3 bg-green-500 rounded'></div>

  return (
    <div className="">
      <div className=" flex gap-1 justify-center">
        {[...Array(52)].map((a, i) => (
          <div className="mt-20 flex flex-col gap-1">
            {[...Array(7)].map((a, i) => (
              <>
              <div key={i} className="w-3 h-3 bg-green-500"></div>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
