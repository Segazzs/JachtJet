const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");

const yachtList = document.getElementById("card-list");
const openListBtn = document.getElementById("open-card");

openListBtn.addEventListener("click", function () {
  let maxHeight = "478px";

  if (yachtList.scrollWidth > 703) {
    maxHeight = "508px";
  }

  if (!yachtList.classList.contains("card-list-open")) {
    yachtList.style.maxHeight = yachtList.scrollHeight + "px";
    yachtList.classList.add("card-list-open");
  } else {
    yachtList.style.maxHeight = maxHeight;
    yachtList.classList.remove("card-list-open");
  }
});

console.log(yachtList.scrollWidth);
