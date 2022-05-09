const r = document.getElementById("row");
let images = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((datas) => {
console.log("🚀 ~ file: app.js ~ line 3 ~ images ~ data", datas)
  datas.forEach(( data ) => {
    let img;
    const req = fetch(`https://jsonplaceholder.typicode.com/photos/${data.id}`).then((res) =>res.json()).then(img => {
    console.log("🚀 ~ file: app.js ~ line 7 ~ req ~ img", img)
  
   
    // console.log("🚀 ~ file: app.js ~ line 6 ~ datas.forEach ~ d", d)
    
  
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
    r.appendChild(el_Div); });
  });
});
