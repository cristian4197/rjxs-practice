import { Observable, Observer, Subject } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Next',value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subs => {
    const intervalId = setInterval( () => {
        subs.next(Math.random());
    }, 1000);
    // Este return se ejecuta al hacer el unsuscribe
    return () => {
        clearInterval(intervalId);
        console.log("Intervalo Limpiado"); 
    }
});

/**
 * 1. Casteo multiple, sirve para distribuir la misma informacion
 * 2. Tambien es un observer
 * 3. Se puede manejar Next, Error, complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();
}, 3500);




// const subs1 = intervalo$.subscribe(rnd => {
//     console.log("Subs1", rnd);
    
// });
// const subs2 = intervalo$.subscribe(rnd => {
//     console.log("Subs2", rnd);
    
// });