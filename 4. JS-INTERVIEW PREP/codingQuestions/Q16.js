// setTimeout

const timeOut = setTimeout(() => {
  console.log("hello after 2 second");
}, 2000);

// setInterval
const timeInterval = setInterval(() => {
  console.log("hello after every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(timeInterval);
}, 5000);
