// Shallow copy
const original = {
  name: "shivam",
  details: { age: 25, city: "Noida" },
};

const shallowCopy = { ...original };
shallowCopy.details.age = 334;

console.log(original.details.age);



// deep copy
const original2 = {
  name: "ritik",
  details: { age: 20, city: "New delhi" },
};

const shallowCopy2 = JSON.parse(JSON.stringify(original2));
shallowCopy2.details.city = "Laura pur";

console.log("Original: ", original2);
console.log("shallowCopy: ", shallowCopy2);
