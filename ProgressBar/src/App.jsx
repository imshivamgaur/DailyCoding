const ProgressBar = ({ progress }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${progress}%`,
          color: `${progress < 5 ? "black" : "white"}`,
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

const App = () => {
  const bars = [3, 5, 10, 20, 30, 40, 70, 90, 100];

  return (
    <>
      <h1>Progress Bar</h1>
      {bars.map((value, index) => (
        <ProgressBar key={index} progress={value} />
      ))}
    </>
  );
};

export default App;
