require('colors');
const { inquirerMenu, pause, readInput, listTaskDelete, confirm, listTaskToSelect } = require('./helpers/inquirer');
const { saveInfo, lookBd } = require('./helpers/saveFile');
const Task = require('./models/task');
const Tasks = require('./models/Tasks');
console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();
    const tasksDB = lookBd();

    if( tasksDB ){
        tasks.chargeTasksArr( tasksDB );
    }
    do {

        opt = await inquirerMenu();
        

        switch (opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc);
            break;
            case '2':
                tasks.listTasks();
            break;
            case '3':
                tasks.listCompletePending();
            break;
            case '4':
                tasks.listCompletePending( false );
            break;
            case '5':
                const ids = await listTaskToSelect(tasks.listArray);
                console.log(ids)
            break;
            case '6':
                const id = await listTaskDelete( tasks.listArray );
                if(id !== '0'){
                    const confirmDelete = await confirm('¿Está seguro que desea eliminar esta tarea?');
                    if(confirmDelete){
                        tasks.deleteTask(id);
                        console.log('Tarea eliminada correctamente')
                    }
                }
            break;
            case '0':
                //
            break;
        
        }

        saveInfo( tasks.listArray );

        if(opt !== '0') await pause();
    } while( opt !== '0');
}

main();