import React from "react";

const Chip = ({ allchips, setAllchips }) => {
  console.log(allchips);

  const handleDeleteChip = (e) => {
    const indexToRemove = e.target.value;
    setAllchips((prevChips) =>
      prevChips.filter((_, idx) => idx != indexToRemove)
    );
  };

  return (
    <div className="allchips">
      {allchips.map((chip, idx) => (
        <div className="chip" key={idx}>
          <p>{chip}</p>
          <button value={idx} onClick={handleDeleteChip}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Chip;
