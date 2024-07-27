const board = document.querySelector("#board");
const SQUARE_NUMBER = 500;
const colors = ["red", "green", "blue", "yellow", "purple", "pink"];

// class X {
//   arr = [];
//
//   push(square) {
//     if (this.arr[this.arr.length - 1] === square) {
//       this.clear(this.arr.slice(0, this.arr.length - 1));
//     } else {
//       this.clear();
//       setColor(square);
//     }
//     this.arr.push(square);
//   }
//
//   clear(a = this.arr) {
//     a.forEach(removeColor);
//     this.arr = [];
//   }
// }
//
// const x = new X();

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

// board.addEventListener("mousemove", (event) => {
//   if (event.target.classList.contains("square")) {
//     x.push(event.target);
//   }
// });

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}
