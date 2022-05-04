let a = document.getElementById("submit");
console.log(a);

var items = ["milk", "bread", "sugar"];

a.addEventListener("click", () => {
  console.log("welcome");
  let inputValue = document.getElementById("input").value;
  console.log(inputValue);
  items.includes(inputValue) ? alert("its present") : alert("its not present");
});
