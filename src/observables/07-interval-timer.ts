import { Observer, interval, timer } from 'rxjs';

const observer:Observer<any> = {
    next: val => console.log('Next:',val),
    error: error => console.log(error),    
    complete: () => console.log('Complete')
};

// Interval y timer son asincronos
const interval$ = interval(1000);
// const timer$ = timer(2000);
// Inicia la secuencia pasado los 2 segundos(2000) cada segundo(1000)
// Eñ valor por defecto que inicia seria 0
// const timer$ = timer(2000, 1000);

// Programa la fecha de ejecutar la emision del observable
const hoyEn5 = new Date();
      hoyEn5.setSeconds(hoyEn5.getSeconds()+5);
const timer$ = timer(hoyEn5);

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");