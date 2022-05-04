var str = "I'm a little tea pot";
var arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

var str2 = arr.join(" ");
console.log(str2);