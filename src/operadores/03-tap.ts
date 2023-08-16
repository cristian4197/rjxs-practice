/**
 * El operador tap
 * Dispara efecto secundarios sin afectar el valor que emite el observable
 */

import { range } from "rxjs";
import { map, tap } from 'rxjs/operators'
const numeros$ = range(1,5);

numeros$
.pipe(
    tap( x => console.log("antes:",x) ),
    map( val => (val*10)),
    // El tap tambien puede recibir un observer para manejar la respuesta, error y complete
    tap({
        next: valor => console.log("Despues", valor),
        complete: () => console.log('Se termino todo')
        })
)
.subscribe(val => console.log('subs',val));