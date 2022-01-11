import React from "react";

import { useCount } from "store/store";

export default () => {
  const [count, setCount] = useCount();
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Awesome Header - Use Context</div>
      <div>
        {count}

        <button
          onClick={() => setCount(0)}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
      </div>
    </header>
  );
};