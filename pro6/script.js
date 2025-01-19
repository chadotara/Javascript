const notesContainer = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img"); // Create the icon element
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "trash-solid.svg";

  // Add the appropriate classes to the icon
  notesContainer.appendChild(inputBox).appendChild(img); // Append the span to the inputBox
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
