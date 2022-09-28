const Task = require("./task");

class Tasks {
    _listado = {};
    
    get listArray(){
        const list = [];
        Object.keys(this._listado).forEach( key => {
            const task = this._listado[key];
            list.push(task);
        })

        return list;
    }

    constructor() {
        this._listado = {};
    }

    deleteTask(id = ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    chargeTasksArr( tasks = [] ){
        tasks.forEach(task => {
            this._listado[task.id] = task;
        });
    }

    createTask( desc = '' ){
        const task = new Task(desc);
        this._listado[task.id] = task;
    }

    listTasks(){
        const tasks = this.listArray;
        tasks.forEach( (task, index) => {
            const idx = `${index + 1 + '.'}`.green;
            console.log(`${idx} ${task['desc']} :: ${task['completeIn'] === null ? 'Pediente'.red : 'Completada'.green}`);
        })
    }
    
    listCompletePending( complete = true ){
        let index = 1;
        const tasks = this.listArray;
        tasks.forEach( task => {
            if(complete){
                if(task['completeIn'] !== null){
                    const idx = `${index + '.'}`.green;
                    console.log(`${idx} ${task['desc']} :: ${task['completeIn']}`);
                }
                index = index + 1;
            }else{
                if(task['completeIn'] === null){
                    const idx = `${index + '.'}`.green;
                    console.log(`${idx} ${task['desc']}`);
                    index = index + 1;
                }
            }
        })
    }
}

module.exports = Tasks;