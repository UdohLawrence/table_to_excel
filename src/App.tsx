import React from "react";

const App: React.FC = () => {
  return (
    <div className="w-[400px] flex flex-col gap-12 bg-gray-200 items-center justify-center p-5 rounded-lg">
      <h1 className="text-gray-800 mt-12 text-xl font-semibold">Extract Tables to Excel</h1>
      <button id="extractTable" className="border-2 border-blue-300 font-semibold mb-12 px-5 text-lg py-2 rounded-lg text-blue-600 hover:bg-blue-400 hover:text-white hover:border-gray-200">Extract Table</button>
    </div>
  );
};

export default App;
