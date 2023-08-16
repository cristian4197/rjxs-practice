import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Siguiente Next',value),
    error: error => console.warn('Error [obs]', error),
    complete: () => console.info('Completado [obs]')
};


// Forma no comun de crear
// const osb$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Emision 1');
    subs.next('Emision 2');

    //Forzar un error

    // const a = undefined;
    // a.nombre = ' Cris';

    // Si emitimos luego del complete las suscripciones no escucharan los cambios
    subs.complete();
    subs.next('Emision despues de complete');
});

// Forma numero 1 de manejar los emisiones en los suscribe
// obs$.subscribe( 
    //Captura cada valor de la emision con el next
    // valor => console.log(valor),
    // Captura los errores
    // error => console.warn(error),
    //Se ejecuta siempre al final
    // () => console.info('Completado')
// );

// Forma numero 2 de manejar los emisiones en los suscribe,
// a través de un observer
obs$.subscribe(observer);



