const outerFunction = (outerValue) => {
  console.log("I'm inside outerFunc");
  return function innerFunction(innerValue) {
    console.log(`Outer: ${outerValue} and Inner: ${innerValue}`);
    return function grandChildFunc(grandChild) {
      console.log(
        `Outer Value: ${outerValue} and Inner Value: ${innerValue} and grand child Value: ${grandChild}`
      );
    };
  };
};

const func = outerFunction("hello");
const grand = func("world");
grand("hii i'm grand child");

// we can accesss the parent's function variable. inside the child function.

// Second Example

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    displayCount: function () {
      let display = `Current count: ${count}`;
      return display;
    },
  };
}

const myCount = counter();
console.log(myCount.increment());
console.log(myCount.increment());
console.log(myCount.displayCount());

// setInterval(() => {
//   console.log(myCount.increment());
//   console.log(myCount.displayCount());
// }, 1000);
