import { of, from, Observer } from 'rxjs';

/**
 * of = toma argumento y genera secuencia
 * from = espera un array, promise, iterable, obsrevable para generar una secuencia
 */

const observer = {
    next: val => console.log('Next:',val),   
    complete: () => console.log('Complete')
};

// Funcion generadora
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);
// const source$ = from([1,2,3,4,5]);
// Asi se obtendria lo mismo con el of
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Fernando');

// const source$ = from (fetch('https://api.github.com/users/klerith'));
// source$.subscribe( async(resp) => {
//    const data = await resp.json();
//    console.log(data);
   
// });
// source$.subscribe(observer);