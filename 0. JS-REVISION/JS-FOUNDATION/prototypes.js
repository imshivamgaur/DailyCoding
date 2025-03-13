let computer = { cpu: 14 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let Acer = {};

// console.log(`lenovo`, lenovo.__proto__);


// New way to do it same like above
let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`Tesla: `, Object.getPrototypeOf(tesla));
