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

  let todos = JSON.parse(localStorage.getItem("tasks")) || [];

  todos.forEach((todo) => renderTask(todo));

  // addtasks
  addTaskBtn.addEventListener("click", function () {
    let inputValue = taskInput.value.trim();
    if ((inputValue === "", inputValue.length < 3)) return;
    // console.log(inputValue);

    let newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    todos.push(newTask);
    saveTodos();

    taskInput.value = ""; // for clear the input
    renderTask(newTask);
  });

  // renderTask
  function renderTask(todo) {
    if (todos.length === 0) {
      let span = document.createElement("span");
      span.setAttribute("class", "no-todos");
      span.textContent = "No Todos";
      todosContainer.appendChild(span);
    }

    let li = document.createElement("li");
    li.setAttribute("id", todo.id);
    li.setAttribute("class", "todo-lists");

    if (todo.completed) li.classList.add("todo-compelete");
    li.innerHTML = `
            <p>${todo.text}</p>
            <div>
              <button class="editbtn">Edit</button>
              <button class="deletebtn">delete</button>
            </div>`;
    // Toggle complete
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      todo.completed = !todo.completed;
      li.classList.toggle("todo-compelete");
      saveTodos();
    });

    // Delete todo
    li.addEventListener("click", (e) => {
      if (e.target.textContent.toLowerCase() === "delete") {
        let taskId = todo.id;
        console.log(taskId);
        filteredTodos = todos.filter((task) => task.id !== taskId);
        todos = filteredTodos;
        console.log(todos);
        li.remove();
        saveTodos();
      }
    });
    // update todo
    li.addEventListener("click", (e) => {
      if (e.target.textContent.toLowerCase() === "edit") {
        let newText = prompt("Edit your task:", todo.text);
        if (newText && newText.trim().length >= 3) {
          todo.text = newText.trim(); // Update text in the object
          li.querySelector("p").textContent = todo.text; // Update UI
          saveTodos(); // Save to localStorage
        }
      }
    });

    todosContainer.appendChild(li);
  }

  // saving to local storage
  function saveTodos() {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }
});
