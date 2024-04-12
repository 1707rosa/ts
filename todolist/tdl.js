const input= document.getElementById('add');
const list= document.querySelector('.list-tasks ul');
let tasks =[];
list.addEventListener('click', deleteTask);
function aggTask(){
    const task = input.value;
    if(task==''){
    alert('Agrege una tarea')
    }
  const objetoTarea = {
    task,
    id: Date.now()
  }
  tasks=[...tasks,objetoTarea];
  createHtml();
  input.value='';
return false;
}

function deleteTask(e){
if(e.target.tagName=='SPAN'){
const deleteId= parseInt(e.target.getAttribute('task-id'));
tasks= tasks.filter(task=> task.id !== deleteId);
}
createHtml();
}
function deleteAll(){
    tasks=[];
    createHtml();
}

function createHtml(){
    cleardisplay();
    if (tasks.length>0){
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.task} <span task-id='${task.id}'>X</span>`;
            list.appendChild(li);
        });
    }
    storage1();

}
function storage1(){
localStorage.setItem('task',JSON.stringify(tasks))
}

function cleardisplay(){
list.innerHTML='';
}

