/**
 ************************Funcion Merge***************************
 * -Es una funcion
 * -Combina 2 observables
 * -El complete del sucribe se ejecuta cuando
 * se completen las emisiones de ambos observables
 */

import { fromEvent, merge } from "rxjs";

import { map } from "rxjs/operators";

const kyeup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

merge(
    kyeup$.pipe(
        // Retornamos el type del evento
        map(val => val?.type)
    ),
    click$.pipe(
        // Retornamos el type del evento
        map(val => val?.type)
    )
    )
.subscribe(console.log);