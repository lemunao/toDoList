var tareas = [
    { id: 1, tarea: "ir a Supermercado", completada: false },
    { id: 2, tarea: "Barrer", completada: false },
    { id: 3, tarea: "Cocinar", completada: false }
]

var htmlTask = document.querySelector("#tasks");
var htmlTaskCompleted = document.querySelector("#taskDone");
let clickButton = document.querySelector("#submitTask");
var taskList = document.querySelector("#taskList");

let htmlUpdate = ""

// Create initial list
for (let tarea of tareas) {
    htmlUpdate += ` <div class="taskList"> 
                        <div> ${tarea.id}</div>
                        <div>${tarea.tarea}</div>
                        <div><input type="checkbox" id="checkClick" onclick="changeStatus(${tarea.id})"></input></div>
                        <div><button onclick="deleteElement(${tarea.id})">X</button></div>
                    </div>`
}
taskList.innerHTML = htmlUpdate

// Add new item on list
clickButton.onclick = () => {
    let newItem = document.querySelector("#newTask").value
    let idCreator = 0;
    //Create new ID
    for (tarea of tareas) {
        idCreator = tarea["id"] + 1
    }
    //Create new item on array
    tareas.push({ id: idCreator, tarea: newItem, completada: false })
    htmlUpdate = ""
    for (let tarea of tareas) {
        htmlUpdate += ` <div class="taskList"> 
                            <div> ${tarea.id}</div>
                            <div>${tarea.tarea}</div>
                            <div><input type="checkbox" id="checkClick" onclick="changeStatus(${tarea.id})"></input></div>
                            <div><button onclick="deleteElement(${tarea.id})">X</button></div>
                        </div>`
    }
    console.log(tareas)
    taskList.innerHTML = htmlUpdate
    htmlTask.innerHTML = `Tareas Totales: ${tareas.length}`
    const pendingTask = tareas.filter(task => task.completada == false)
    htmlTaskCompleted.innerHTML = `Tareas Pendientes: ${pendingTask.length}`
}

//Change status to done
function changeStatus(id) {
    const index = tareas.findIndex((task) => task.id == id)
    checkClick = document.querySelector("#checkClick")
    if (checkClick.checked) {

    } else {
        tareas.completada == false;
        console.log(index)
    }
}


//Delete item from list
function deleteElement(id) {
    console.log(id)
    const index = tareas.findIndex((del) => del.id == id)
    tareas.splice(index, 1)
    let htmlUpdate = ""
    for (let tarea of tareas) {
        htmlUpdate += ` <div class="taskList"> 
                            <div> ${tarea.id}</div>
                            <div>${tarea.tarea}</div>
                            <div><input type="checkbox" id="checkClick" onclick="changeStatus(${tarea.id})"></input></div>
                            <div><button onclick="deleteElement(${tarea.id})">X</button></div>
                        </div>`
    }
    taskList.innerHTML = htmlUpdate;
    htmlTask.innerHTML = `Tareas Totales: ${tareas.length}`
    const pendingTask = tareas.filter(task => task.completada == false)
    htmlTaskCompleted.innerHTML = `Tareas Pendientes: ${pendingTask.length}`
}

htmlTask.innerHTML = `Tareas Totales: ${tareas.length}`
const pendingTask = tareas.filter(task => task.completada == false)
htmlTaskCompleted.innerHTML = `Tareas Pendientes: ${pendingTask.length}`

/*
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()
*/