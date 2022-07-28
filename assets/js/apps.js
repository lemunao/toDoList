var tareas = [
    { id: 1, tarea: "ir a Supermercado", completada: false },
    { id: 2, tarea: "Barrer", completada: false },
    { id: 3, tarea: "Cocinar", completada: true }
]

var htmlTask = document.querySelector("#tasks");
var htmlTaskCompleted = document.querySelector("#taskDone");

let pendingTask = tareas.forEach(x => x = tareas.length )
htmlTask.innerHTML = pendingTask





















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