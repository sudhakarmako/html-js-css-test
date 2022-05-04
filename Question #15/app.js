var animals = [
  { name: "Jason", species: "rabbit" },
  { name: "Jessica", species: "dog" },
  { name: "Jacky", species: "owl" },
  { name: "Luke", species: "fish" },
  { name: "Junior", species: "rat" },
  { name: "Thomas", species: "cat" },
];

const filterData = animals.filter((i) => {
  console.log(i.species);
  return i.species == "dog";
});
console.log(filterData);
