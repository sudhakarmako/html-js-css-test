const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementsByClassName("modal-overlay");
const openModal2 = document.getElementById("modal-id");
console.log("skjdk", openModal2);
openModal.onclick = (e) => {
  const modalId = e.target.dataset.model;
  const model = document.querySelector(`#${modalId}`);
  console.log("iddd", modalId);
  // model.classList.remove("active");
  model.classList.add("active");
};;;
