import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          // width: `${progress}%`,

          color: `${animatedProgress < 5 ? "black" : "white"}`,
        }}
        // Accessibility
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

const App = () => {
  const bars = [3, 5, 15, 20, 35, 45, 70, 80, 95];

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
