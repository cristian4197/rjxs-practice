/**
 * ForkJoin
 * -Funcion que permite enviar observables como argumentos, combinarlos y emitir los valores de los observables cuando todos se completen
 * -Emite el valor de los observables de entrada como un arreglo
 * -Los observables de entrada tienen que ser finitos de lo contrario nunca habra emision de salida
 */

import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1,2,3,4);
const intervalo$= interval(1000).pipe(take(3));//0,1,2
const letras$ = of('a','b','c','d').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$)
// .subscribe(console.log);
//Aqui se emiten los ultimos valores de cada observable
// La salida seria 4,2,a

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$)
// .subscribe(resp => {
//     console.log('numeros: ', resp[0]);
//     console.log('intervalo: ', resp[1]);
//     console.log('letras: ', resp[2]);
// });

// Se puede manejar la salida como objetos
// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// })
// .subscribe(resp => {
//     console.log('numeros: ', resp);
// });

// Se puede manejar la salida como objetos
// Con nombres personalizados
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
})
.subscribe(resp => {
    console.log('numeros: ', resp);
});