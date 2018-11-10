
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de una tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completa o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', ' crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea ', {
        descripcion
    })
    .help()
    .argv;




module.exports = {
    argv
}