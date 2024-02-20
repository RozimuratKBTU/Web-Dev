function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskList = document.getElementById('tasks');


    var li = document.createElement('li');
    li.innerHTML =  taskInput.value +  ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';



    if(taskInput.value.trim() !== '') {
        taskList.append(li);
        taskInput.value = '';

    } else {

        alert('Please enter a task.');
        askInput.value = '';
    }
}

function deleteTask(btn) {

    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
