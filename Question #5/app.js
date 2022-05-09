const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const placeValue = (num, res = [], factor = 1) => {
        if (num) {
          const val = (num % 10) * factor;
          res.unshift(val);
          return placeValue(Math.floor(num / 10), res, factor * 10);
        }
        return res;
      };

      const value = document.querySelector(".input-field").value
      const output = placeValue(parseInt(value)).join("+");
      console.log(output)
      document.getElementById("data").innerHTML = output;

      
});