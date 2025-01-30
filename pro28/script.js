let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightbox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightbox.addEventListener("drop", function (e) {
      rightbox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
