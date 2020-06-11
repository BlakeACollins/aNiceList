//Define UI varrs

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListeners();


function loadEventListeners(){
    form.addEventListener('submit', addTask);
    //Remove task button event
    taskList.addEventListener('click', removeTask);
    //Clear task button event
    clearBtn.addEventListener('click', clearTask);
    //Filter task event
    filter.addEventListener('keyup', filterTask);

}
//Function to add a task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task please');
    }
//Create li element
const li = document.createElement('li');
//Add class to li element
li.className = 'collection-item';
//Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
//Create new link element
const link = document.createElement('a');
//Add class to link element
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
//Append to link to li
li.appendChild(link);

//Append the li to ul
taskList.appendChild(li);
//Clear input
taskInput.value = '';


e.preventDefault();
}

//Remove task function
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

//Clear all task button function

function clearTask(){
    //taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

