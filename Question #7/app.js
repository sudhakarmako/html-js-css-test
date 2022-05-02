const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementsByClassName("modal-overlay");

openModal.onclick = (e) => {
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  model.classList.remove("active");
  model.classList.add("active");
};


const closed__popup = document.querySelector(".btn-clear");
closed__popup.addEventListener("click",function(e){
  const models = document.querySelector(".modal");
    models.classList.remove("active");
})