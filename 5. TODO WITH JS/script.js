document.addEventListener("DOMContentLoaded", () => {
  // For input shortcut
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      document.getElementById("taskInput").focus();
    }
  });

  const addTaskBtn = document.querySelector(".addbtn");
  const taskInput = document.querySelector("#taskInput");
  const todosContainer = document.querySelector(".todos-container");

  function addTask() {
    addTaskBtn.addEventListener("click", function () {
      let inputValue = taskInput.value;
      if ((inputValue === "", inputValue.length < 3)) return;
      // console.log(inputValue);

      let li = document.createElement("li");
      li.setAttribute("class", "todo-lists")

      li.innerHTML = ` <li>${inputValue}</li>
          <div>
            <button class="editbtn">Edit</button>
            <button class="deletebtn">delete</button>
          </div>`;

      todosContainer.appendChild(li);

      taskInput.value = ""; // for clear the input
    });
  }

  addTask();
});
