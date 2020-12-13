import React from "react";

const App: React.FC = () => (
  <div>
    <h1>test</h1>
    <button className="bg-gray-800 p-1 rounded text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <span className="sr-only">View notifications</span>
    </button>
  </div>
);

export default App;
