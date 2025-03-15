document.addEventListener("DOMContentLoaded", function () {
  let listItems = document.querySelectorAll("li");
  let leftbox = document.querySelector("#leftbox");
  let rightbox = document.querySelector("#rightbox");
  let selected = null;

  // making li draggable
  listItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      selected = e.target;
      // console.log(selected);
    });
  });
  // allow droping in rightbox
  rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log(e);
  });

  rightbox.addEventListener("drop", function (e) {
    if (selected) {
      rightbox.appendChild(selected);
      selected = null;
    }
  });
  // allow dropping in leftbox
  leftbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  leftbox.addEventListener("drop", function (e) {
    if (selected) {
      leftbox.appendChild(selected);
      selected = null;
    }
  });
});
