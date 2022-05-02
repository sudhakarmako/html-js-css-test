var items = ["milk", "bread", "sugar"];

// const milkInList = (items) => {
//   if (items[0] == "milk") {
//     console.log("milk exists in items");
//   }
// };

function milkInList(items) {
  if (items[0] == "milk") {
    console.log("milk in list");
  } else console.log("milk not in list");
}

milkInList();
///////

function breadInList(items) {
  if (items[1] == "bread") {
    console.log("bread in list");
  } else console.log("error");
}
breadInList();

function sugarInList(items) {
  if (items[2] == "sugar") {
    console.log("sugar in list");
  } else console.log("error");
}

sugarInList();
