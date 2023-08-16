import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Next',value),
    error: error => console.warn('Error', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    // Crear un contador
    let counter = 0;
    
   const interval = setInterval( () => {
        counter++;
        subscriber.next(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
        
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

subs1.add(subs2);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    console.log("Suscripcion destruida");
}, 3000);