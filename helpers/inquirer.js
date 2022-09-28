const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices : [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar una tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async() => {
    console.log('======================'.red);
    console.log('Seleccione una opción'.red);
    console.log('======================'.red);
    const { option } = await inquirer.prompt(questions);
    return option;
}

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.yellow} para continuar\n`
        }
    ]
    await inquirer.prompt(question);

}

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Porfavor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listTaskDelete = async(tasks = []) => {
    const choices = tasks.map( (task, index) => {
        const idx = `${index + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
    
}

const listTaskToSelect = async(tasks = []) => {
    const choices = tasks.map( (task, index) => {
        const idx = `${index + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: true
        }
    });

    const pregunta = [
        {
            type: 'ckeckbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    listTaskDelete,
    confirm,
    listTaskToSelect
}