import { useEffect, useRef, useState } from "react";

const App = () => {
  const NumberOfOtpDigits = 5;

  const [inputArr, setInputArr] = useState(
    new Array(NumberOfOtpDigits).fill("")
  );

  let refArr = useRef([]);
  // console.log(refArr);

  const handleOnChange = (e: any, index: any) => {
    let value = e.target.value.trim();
    if (isNaN(value)) return;

    let newArry = [...inputArr];
    newArry[index] = e.target.value.slice(-1);

    setInputArr(newArry);
    value && refArr.current[index + 1]?.focus();
  };

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnKeyDown = (e: any, index: any) => {
    if (!e.target.value && e.key === "Backspace") {
      console.log(e.target.value);
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <h1>Validate OTP</h1>
      <div className="input-container">
        {inputArr.map((e, index) => {
          return (
            <input
              key={index}
              type="text"
              value={e}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
