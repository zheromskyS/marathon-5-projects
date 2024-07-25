const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

window.addEventListener("load", () => {
  getPlaceholder();
});

//drag&drop

item.addEventListener("dragstart", (event) => {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
});

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  placeholder.addEventListener("dragenter", (event) => {
    event.target.classList.add("hovered");
  });

  placeholder.addEventListener("dragleave", (event) => {
    event.target.classList.remove("hovered");
  });

  placeholder.addEventListener("drop", (event) => {
    setPlaceholder(event.target);
    event.target.append(item);
    event.target.classList.remove("hovered");
  });
});

item.addEventListener("dragend", (event) => {
  event.target.className = "item";
});

// localstorage

function setPlaceholder(target) {
  localStorage.setItem("placeholder", target.classList[1]);
}

function getPlaceholder() {
  document
    .querySelector(`.${localStorage.getItem("placeholder")}`)
    .append(item);
}
