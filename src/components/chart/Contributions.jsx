import React, { useState } from "react";

const Contributions = () => {
  const [data, setData] = useState();
  // <div className='w-3 h-3 bg-green-500 rounded'></div>

  return (
    <div >
      <div className="mt-20 grid grid-rows-5 grid-cols-12 gap-2">
        {[...Array(365)].map((a, i) => (
          <div className="w-3 h-3 bg-green-500 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
