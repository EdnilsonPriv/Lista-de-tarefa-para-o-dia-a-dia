// Carregar tarefas salvas no localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskValue;

    // Botão de remover tarefa
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = function() {
        taskList.removeChild(newTaskItem);
        removeTask(taskValue);
    };

    newTaskItem.appendChild(removeButton);
    taskList.appendChild(newTaskItem);

    // Salvar a tarefa no localStorage
    saveTask(taskValue);

    // Limpar o campo de entrada
    taskInput.value = '';
}

// Função para salvar a tarefa no localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para remover a tarefa do localStorage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar as tarefas salvas
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');

    tasks.forEach(task => {
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            taskList.removeChild(newTaskItem);
            removeTask(task);
        };

        newTaskItem.appendChild(removeButton);
        taskList.appendChild(newTaskItem);
    });
}