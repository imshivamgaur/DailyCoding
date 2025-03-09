const  Settings = ({ data, setData, errors }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            onChange={(e) => handleDataChange(e)}
            checked={theme === "dark"}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            onChange={(e) => handleDataChange(e)}
            checked={theme === "light"}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;