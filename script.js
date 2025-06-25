const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = document.getElementById("task-input").value;
  const taskTime = document.getElementById("task-time").value;

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} (Due: ${taskTime})`;

  const actions = document.createElement("span");
  actions.className = "task-actions";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️";
  doneBtn.onclick = () => {
    taskContent.style.textDecoration = "line-through";
    taskContent.style.color = "gray";
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", taskText);
    if (newText) {
      taskContent.textContent = `${newText} (Due: ${taskTime})`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  actions.append(doneBtn, editBtn, deleteBtn);
  li.append(taskContent, actions);
  taskList.appendChild(li);

  // 🌟 Highlight the new task briefly
  li.style.transition = "background-color 0.5s";
  li.style.backgroundColor = "#e0cfff";

  setTimeout(() => {
    li.style.backgroundColor = "#f3e8ff";
  }, 1000);

  form.reset();
});
