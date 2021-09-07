const hobby = ["Gaming", "Anime"];
const secHobby = ["Hiking", "Singing"];
const newHobby = [...hobby, "Futsal", "Swimming", "Karoke", ...secHobby];
console.log(hobby);
console.log(newHobby);

// OBJECT
const obj1 = { nama: "Rino", age: 18 };
const obj2 = { nama: "Jhon", ages: 20 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// YANG GA BOLEH!!!
// const object = {nama: "johan",umur: "18"};
// const newObject = [...object];
