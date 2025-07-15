let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <strong>${task.text}</strong>
      <div class="timestamp">⏰ ${task.time}</div>
      <div class="task-controls">
        <button onclick="toggleComplete(${index})">${task.completed ? "Undo" : "Done"}</button>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const text = document.getElementById("taskInput").value;
  const time = document.getElementById("taskTime").value;

  if (text && time) {
    tasks.push({ text, time, completed: false });
    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";
    renderTasks();
  } else {
    alert("Please enter both task and date/time!");
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

renderTasks();
