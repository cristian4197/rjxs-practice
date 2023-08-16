/**
 * Combilatest
 * -Funcion que permite enviar observables como argumentos, combinarlos y emitir los valores de los observables internos simultaneamente
 * -Regresa un nuevo observables, que emite valores hasta que los observables internos emitan al menos un valor
 */


import { combineLatest, fromEvent, merge } from "rxjs";

import { map, pluck, tap } from "rxjs/operators";

// const kyeup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$ = fromEvent<PointerEvent>(document, 'click');

// combineLatest(
//     kyeup$.pipe(
//         // Retornamos el type del evento
//         map(val => val?.type)
//     ),
//     click$.pipe(
//         // Retornamos el type del evento
//         map(val => val?.type)
//     )
//     )
// .subscribe(console.log);

const input = document.createElement('input');
const input2 = document.createElement('input');

input.placeholder = 'user@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input,input2);

//Helper

const getInputStream = (ele: HTMLElement) => {
    return fromEvent<KeyboardEvent>(ele,'keyup')
    .pipe(
        tap(console.log),
        map(val => val?.target?.value)
    );
}

combineLatest(
    getInputStream(input),
    getInputStream(input2)
).subscribe(console.log);