const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementsByClassName("modal-overlay");
const closeModal=document.getElementById("close")

openModal.onclick = (e) => {
  console.log("8887777")
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  model.classList.remove("active");
  model.classList.add("active");
};

closeModal.onclick=(e)=>{
  console.log("jhgfdsads")
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  model.classList.add("active");
  model.classList.remove("active");
}
