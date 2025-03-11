// Promises

const data = {
  name: "shivam",
  age: 20,
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve(data);
    // }, 2000);
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
    data.then((response) => response.json()).then((data) => resolve(data));
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
