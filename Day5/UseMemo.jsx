import React, { useState, useMemo } from "react";

const slowFunction = (number) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1e6; i++) {} // Simulating a delay
  return number * 2;
};

const UseMemoExample = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(true);

  const darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  const doubledNumber = useMemo(() => slowFunction(num), [num]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <h1>This is a useMemo example</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value, 10) || 0)}
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h2 style={darkLight}>Doubled Number: {doubledNumber}</h2>
    </div>
  );
};

export default UseMemoExample;
