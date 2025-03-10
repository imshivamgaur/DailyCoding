const outerFunction = (outerValue) => {
  console.log("I'm inside outerFunc");
  return (innerFunction = (innerValue) => {
    console.log(`Outer: ${outerValue} and Inner: ${innerValue}`);
  });
};

const func = outerFunction("hello");
func("world");


// we can accesss the parent's function variable. inside the child function.