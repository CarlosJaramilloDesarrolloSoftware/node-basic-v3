var TaskModel  = function(title, description, created_at, url_image){
    this.id = TaskModel.tasks.length + 1;
    this.title = title;
    this.description = description;
    this.created_at = created_at;
    this.url_image = url_image;
}

TaskModel.prototype.toString = () => {
    return "id: " + this.id + " | Title: " + this.title;
}

TaskModel.tasks = [];

TaskModel.add = (task) => {
    TaskModel.tasks.push(task);
    return true;
}

TaskModel.findAll = () => {
    return TaskModel.tasks;
}

TaskModel.findById = (id) => {
    /* Código */
    for (let index = 0; index < TaskModel.tasks.length; index++) {
        const task = TaskModel.tasks[index];
        if(task.id == id){
            return task;
        }
    }

    return null;

    // return TaskModel.tasks.find(task => task.id == id);

}

TaskModel.deleteById = (id) => {
    /* Código */
    let pos = TaskModel.tasks.findIndex(task => task.id == id);
    if(pos >= 0){
        /* Eliminar */
    }
}



// Llenando el arreglo apra empezar el modelo CON DATOS
let task1 = new TaskModel('Titulo1', 'Descripción1', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task1);

let task2 = new TaskModel('Titulo2', 'Descripción2', new Date(), 'https://picsum.photos/200/300.jpg');
TaskModel.add(task2);


module.exports = TaskModel