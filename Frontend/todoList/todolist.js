let allTask = [];

let textInput = document.getElementById("textInput");
let errorMsg = document.getElementById("errorMsg");
let listContainer = document.getElementById("list-container");
let taskCounter = document.getElementById("taskCounter");

// Add a new task
function addTask() {
    if (!textInput.value.trim()) {
        errorMsg.innerText = "field cannot be empty";
        errorMsg.style.color = "red";

        setTimeout(() => {
            errorMsg.innerText = "";
            textInput.value = "";
        }, 3000);
    } else {
        let task = {
            task: textInput.value,
            completed: false,
        };

        allTask.push(task);
        showTasks();
        saveTask();
        textInput.value = "";
    }
}

// Display all tasks
function showTasks() {
    listContainer.innerHTML = "";

    allTask.forEach((Task, index) => {
        let LI = document.createElement("li");

        LI.innerHTML = `
            <span onclick="toggleComplete(${index})" class="${Task.completed ? 'completed' : ''}">
                ${Task.task}
            </span>
            <i class="bi bi-pencil-square" onclick="editTask(${index})"></i> 
            <i class="bi bi-x-circle" onclick="deleteTask(${index})"></i>
        `;

        listContainer.append(LI);
    });

    updateCounter(); // update completed counter
}

// Toggle task completed state
function toggleComplete(index) {
    allTask[index].completed = !allTask[index].completed;
    showTasks();
    saveTask();
}

// Edit a task
function editTask(i) {
    let editedTask = prompt("Update your Task", allTask[i].task);
    if (editedTask !== null && editedTask.trim() !== "") {
        allTask[i].task = editedTask;
        showTasks();
        saveTask();
    }
}

// Delete a task
function deleteTask(i) {
    allTask = allTask.filter((_, index) => index !== i);
    showTasks();
    saveTask();
}

// Update completed counter
function updateCounter() {
    let completed = allTask.filter(t => t.completed).length;
    let total = allTask.length;

    if (total === 0) {
        taskCounter.style.display = "none"; // hide if no tasks
    } else {
        taskCounter.style.display = "block"; // show if tasks exist
        taskCounter.innerText = `Tasks Completed: ${completed} / ${total}`;
    }
}

// Allow pressing Enter to add task
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Save tasks to localStorage
function saveTask() {
    localStorage.setItem("currentTasks", JSON.stringify(allTask));
}

// Load tasks from localStorage
function getTask() {
    let TASKS = localStorage.getItem("currentTasks");
    if (TASKS) {
        allTask = JSON.parse(TASKS);
        showTasks();
    }
}

getTask();
