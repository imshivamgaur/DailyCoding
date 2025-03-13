let data = {
  name: "shivam",
  role: "developer",
};

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("fetching...");
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve(data);
      } else {
        reject("Error to fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return `message after fetching data: shivam`;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
