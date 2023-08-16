import { asyncScheduler } from 'rxjs';
// Con el asyncScheduler podemos ejecutar estas fuinciones
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => {
    console.log('Hola Mundo');
};

const saludar2 = (nombre) => {
    console.log(`Hola ${nombre}`);
};

// Ejecuta la funcion en un tiempo especificado
// Simulamos el setTimeout con asyncScheduler
// asyncScheduler.schedule(saludar,2000);
// asyncScheduler.schedule(saludar2,2000, 'Cristian');


// Simulamos el setInterval con asyncScheduler
// No puede ser una funcion de fecha
// El state para este caso y para el anterior siempre es un solo argumento(string,number, objeto, etc)
/**
 * 1-function, Le pasamos una funcion, no tiene que ser de flecha,
 * 2-Le pasamos desde que intervalo de tiempo se dispare
 * 3- le pasamos el estado inicial
 */
const subs = asyncScheduler.schedule( function(state){
    console.log('state', state);
    // Asi convertimos como si fuera un interval
    // Actualizamos el estado, y que se actualice cada 1 segundo
    this.schedule(state + 1, 1000);
}, 3000, 0 );

// Cancelamos la suscripcion
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);
