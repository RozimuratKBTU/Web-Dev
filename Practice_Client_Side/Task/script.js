function addTask(){
    taskInput = document.getElementById('new-task');
    taskList = document.getElementById('tasks')

    li = document.createElement('li')

    li.innerHTML = taskInput.value + '<button class="delete-btn" onclick = deleting(this) > Delete</button>';

    if(taskInput.value.trim() !== ''){
        taskList.appendChild(li);
        taskList.value = '';
    }else {
        alert('Please write something')
        taskList.value = '';
    }
}

function  deleting(btn){
    li = btn.parentNode;
    li.parentNode.removeChild(li);

}