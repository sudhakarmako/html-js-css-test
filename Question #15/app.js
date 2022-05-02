var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

function filterPets(animals,name) {
    return animals.filter(function(animals) {
        return animals.name.filter(o => o.value.includes(name));
    })
  }
  
  console.log(filterPets(animals));