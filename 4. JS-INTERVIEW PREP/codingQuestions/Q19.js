// difference between call apply and bind

const person = {
  name: "Shivam",
};

function cookFood(ing1, ing2) {
  console.log(`${this.name} is eating ${ing1} and ${ing2}`);
}

// ✅ `call()` - Arguments directly likhte hain
cookFood.call(person, "puri", "sabji");

// ✅ `apply()` - Arguments ek array me pass karte hain
cookFood.apply(person, ["puri", "sabji"]);

// ✅ `bind()` - Ek naya function return karta hai jisme `this` permanently set hota hai
const returnFood = cookFood.bind(person, "puri", "sabji");
returnFood();
