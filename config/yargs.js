const opts = {
    base: { //--base
        demand: true,
        alias: 'b' //-b
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                .command('Crear', 'Genera un archivo con la tabla de multiplicar', opts)
                .help()
                .argv;

module.exports = {
    argv
}