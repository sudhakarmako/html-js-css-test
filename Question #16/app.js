function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = data.getSeconds();
  var session = "PM";
  if (h == 0) {
    h = 12;
  }
  if (h < 12) {
    h = h - 12;
    session = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").innerHTML = time;

  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 5000);
}

showTime();
