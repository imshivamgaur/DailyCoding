import React, { useState } from "react";
import Chip from "./component/Chip.jsx";

const App = () => {
  const [chip, setChip] = useState("");
  const [allchips, setAllchips] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAllchips((prevChips) => [...prevChips, chip]);
    setChip("");
  };

  return (
    <div className="main">
      <h1>Chips input</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={chip}
          onChange={(e) => setChip(e.target.value)}
          type="text"
          placeholder="Type a chip and press tag"
          autoFocus
        />
      </form>
      <Chip allchips={allchips} setAllchips={setAllchips} />
    </div>
  );
};

export default App;
