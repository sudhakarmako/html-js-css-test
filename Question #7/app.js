const openModal = document.getElementById("openModal");
// const modalOverlay = document.getElementsByClassName("btn-clear");

openModal.onclick = (e) => {
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  model.classList.remove("active");
  model.classList.add("active");
};

// modalOverlay.onclick = (e)=>{
//   alert()
//   const models = document.querySelector(".modal");
//   models.classList.remove("active");
// }
 

const closed__val = document.querySelector(".btn-clear");

closed__val.addEventListener("click",function(e){
  const models = document.querySelector(".modal");
    models.classList.remove("active");
})