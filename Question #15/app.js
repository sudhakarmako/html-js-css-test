var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]
  
  function filterPets(pets, characteristic) {
    return pets.filter(function(pet) {
      return pet.characteristics.filter(o => o.value.includes(characteristic));
    })
  }
  
  console.log(filterPets(animals, 'dog'));