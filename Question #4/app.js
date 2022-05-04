const r = document.querySelector(".row");
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders
};
let images = fetch("https://jsonplaceholder.typicode.com/posts",requestOptions).then(response => response.text())
.then(result => {

  console.log("=======>",result)
  result.forEach(({ data }) => {
    const req = fetch(`https://jsonplaceholder.typicode.com/photos/` + data.id);
    const img = req.json();
    let el_Div = document.createElement("div");
    el_Div.classList.add("col");
    el_Div.innerHTML = `<div class="card">
                        <img src="${img.url}" alt ="${img.title}" />
                          <header>
                              <h4>${data.title}</h4>
                          </header>
                          <p>${data.body}</p>
                          <footer class="is-right">
                              <a class="button primary">Submit</a>
                              <a class="button">Cancel</a>
                          </footer>
                      </div>`;
    r.appendChild(el_Div);
  });
});
fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
