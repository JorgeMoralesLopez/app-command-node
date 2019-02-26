//after node v8.15.0 npm 6.4.1
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


//let base = 'a';
//console.log(process.argv)
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]// [1]coge el segundo elemento del array
console.log('limite', argv.limite)
//console.log(argv.base);
//console.log(argv2);
let comando = argv._[0];

switch (comando) {

    case 'listar': 
        console.log('listar')
        listarTabla(argv.base, argv.limite)
    break;
    case 'crear': 
        console.log('crear');
        crearArchivo(argv.base, argv.limite) 
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
    break;

    default:
        console.log('Comando no reconocido')
}
 
/**/