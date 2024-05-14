// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    const categoryInput = document.getElementById('categoryInput');
    const category = categoryInput.value;
    
    if (taskName !== '') {
        const newTask = {
            id: Date.now(),
            name: taskName,
            category: category,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTaskCompletion(${task.id})" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.name}</span>
            <span class="category">${task.category}</span>
        `;
        taskList.appendChild(li);
    });
}

// Initial rendering of tasks
renderTasks();
