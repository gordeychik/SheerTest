const link = document.getElementById("policyLink");
const modal = document.getElementById("policyModal");
const closeIcon = document.getElementById("closeIcon");
const body = document.querySelector('.body')

link.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target == policyModal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
});
