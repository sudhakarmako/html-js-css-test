const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementsByClassName("modal-overlay");
const closeModal = document.getElementById("closeModal");
openModal.onclick = (e) => {
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  model.classList.remove("active");
  model.classList.add("active");
};
closeModal.onclick = (e) => {
  console.log('temove')
  const modalId = e.target.dataset.model;
  const model = document.querySelector('.modal');
  model.classList.remove("active");
}