import { Observer, of } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Siguiente Next',value),
    error: error => console.warn('Error [obs]', error),
    complete: () => console.info('Completado [obs]')
};
// const obs$ = of([1,2,3,4,5,6]);
const obs$ = of(...[1,2,3,4,5,6]);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log("Inicio de observable");


obs$.subscribe(observer);

console.log("Fin de observable");
