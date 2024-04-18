const input= document.getElementById('add'); //
const list= document.querySelector('.list-tasks ul'); // seleccione el ul dentro de la clase list-taks
let tasks =[];
list.addEventListener('click', deleteTask); //metodo para agregar el evento click al elemento list
function aggTask(){ //agregar una tarea
    const task = input.value;
    if(task==''){
    alert('Agrege una tarea')
    }
  const objetoTarea = {//objeto de tarea con nombre e id unico para identificar cada tarea
    task,
    id: Date.now()
  }
  tasks=[...tasks,objetoTarea]; //se agrega el objeto de tarea al arreglos task
  createHtml();
  input.value='';
return false;
}

function deleteTask(e){
if(e.target.tagName=='SPAN'){ //elimina la tarea del arreglo task cuando se hace click al elemento span asociado a esa tarea
const deleteId= parseInt(e.target.getAttribute('task-id'));
tasks= tasks.filter(task=> task.id !== deleteId);
}
createHtml();
}
function deleteAll(){
    tasks=[];
    createHtml();
}

function createHtml(){ // toma las tareas del arreglo task y las "convierte" en elementos lista, se agrega el checkbox para marcar la tarea como completada
    cleardisplay();
    if (tasks.length>0){
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="checkbox" class="completed" onclick="taskCompleted(${task.id})" ${task.completed ? 'checked' : ''}> ${task.task} <span task-id='${task.id}' onclick="taskCompleted(${task.id})">${task.completed ? '✓' : 'X'}</span>`;
            if (task.completed) { //si la tarea esta comcpletada se agrega a la clase completed de css
                li.classList.add('completed'); 
            }
            list.appendChild(li);//agrega un nuevo elemento li a  list (se crea un nuevo nodo hijo de un nodo existente en el DOM)
        });
    }
    storage1();
    

}
function storage1(){
localStorage.setItem('task',JSON.stringify(tasks)) // convertir el arreglo en cadena para que se muestre en el localstorage
}
}

function cleardisplay(){
list.innerHTML='';
}

