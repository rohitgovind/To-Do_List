const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask(event) {
	event.preventDefault();

	const taskName = newTaskInput.value.trim();

	if (taskName) {
		const task = document.createElement('li');
		const taskText = document.createElement('span');
		taskText.textContent = taskName;
		task.appendChild(taskText);

		const taskButtons = document.createElement('div');
		const completeButton = document.createElement('button');
		completeButton.textContent = 'Complete';
		completeButton.addEventListener('click', completeTask);
		taskButtons.appendChild(completeButton);

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'delete-btn';
		deleteButton.addEventListener('click', deleteTask);
		taskButtons.appendChild(deleteButton);

		task.appendChild(taskButtons);

		taskList.appendChild(task);

		newTaskInput.value = '';
	}
}

function completeTask(event) {
	const task = event.target.parentNode.parentNode;
	task.classList.toggle('completed');
}

function deleteTask(event) {
	const task = event.target.parentNode.parentNode;
	taskList.removeChild(task);
}

document.getElementById('add-btn').addEventListener('click', addTask);
