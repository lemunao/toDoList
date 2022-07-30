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
renderToDOList()
renderTotalChores()
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
    renderToDOList()
    renderTotalChores()
}


//Delete item from list
function deleteElement(id) {
    console.log(id)
    const index = tareas.findIndex((del) => del.id == id)
    tareas.splice(index, 1)
    renderTotalChores()
    renderToDOList()
}


//Change status to done
function changeStatus(id) {
    checkClick = document.querySelector("#checkClick")
    const index = tareas.findIndex((task) => task.id == id)
    if (checkClick.checked) {       
        tareas[index].completada = "true"
        renderTotalChores()
    } else {        
        tareas[index].completada = "false"        
        console.table(tareas)
    }
    renderTotalChores()
}


//Renders
function renderToDOList() {
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
}
function renderTotalChores() {
    htmlTask.innerHTML = `Tareas Totales: ${tareas.length}`
    const pendingTask = tareas.filter(task => task.completada == false)
    htmlTaskCompleted.innerHTML = `Tareas Pendientes: ${pendingTask.length}`
}