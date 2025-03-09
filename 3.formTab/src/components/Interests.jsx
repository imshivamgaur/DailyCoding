const Interest = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };

  console.log(interests);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            onChange={(e) => handleDataChange(e)}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="gaming"
            onChange={(e) => handleDataChange(e)}
            checked={interests.includes("gaming")}
          />
          Gaming
        </label>
        <label>
          <input
            type="checkbox"
            name="music"
            onChange={(e) => handleDataChange(e)}
            checked={interests.includes("music")}
          />
          Music
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interest;