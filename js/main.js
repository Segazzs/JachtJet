const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", function () {
  openBtn.classList.add("close");
  closeBtn.classList.remove("close");
  modal.classList.add("is-open");
});

closeBtn.addEventListener("click", function () {
  closeBtn.classList.add("close");
  openBtn.classList.remove("close");
  modal.classList.remove("is-open");
});

const yachtList = document.getElementById("card-list");
const openListBtn = document.getElementById("open-card");

openListBtn.addEventListener("click", function () {
  if (!yachtList.classList.contains("card-list-open")) {
    yachtList.style.maxHeight = yachtList.scrollHeight + "px";
    yachtList.classList.add("card-list-open");
  } else {
    yachtList.style.maxHeight = "478px";
    yachtList.classList.remove("card-list-open");
  }
});
