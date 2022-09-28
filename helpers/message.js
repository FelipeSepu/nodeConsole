require('colors');

const Menu = async() => {

    return new Promise(resolve => {
        console.clear();
        console.log('======================'.red);
        console.log('Seleccione una opción'.red);
        console.log('======================'.red);
        console.log(`${'1.'.yellow} Crear tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'3.'.yellow} Listar tareas completadas`);
        console.log(`${'5.'.yellow} Completar tareas`);
        console.log(`${'6.'.yellow} Borrar una tarea`);
        console.log(`${'0.'.yellow} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('seleccione una opción: ', (opt) =>{
            readline.close();
            resolve(opt);
        })
    });

}

const Pause = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
            readline.close();
            resolve();
        })
    })
}

module.exports = {
    Menu,
    Pause
}