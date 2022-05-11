var loc = window.location.hash.substring(1);
console.log(loc);
document.getElementById(loc).classList.add("active");
