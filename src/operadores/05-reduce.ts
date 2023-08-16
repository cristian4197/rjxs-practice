import { interval, reduce, take, tap } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorActual:number) => {
    return acumulador + valorActual;
};
// El cero es el valor inicial para inicializar la acumulacion
const total = numbers.reduce(totalReducer, 0);

console.log("total arr", total);

// El primer valor que emite el interval es cero
// Por eso cortamos las emisiones a la sexta vez para
// obtener el mismo valor que en el ejercicio de mas arriba
// [0,1,2,3,4,5]
interval(500)
.pipe(
    take(6),
    tap(console.log),
    reduce( totalReducer )
)
.subscribe( {
    next: val =>  console.log('next:', val),
    complete: () => console.log('Complete')
} )
