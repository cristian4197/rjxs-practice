import { fromEvent, interval, takeUntil } from "rxjs";


const button = document.createElement('button');
button.innerHTML= 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

const clickBnt$ = fromEvent(button,'click');

counter$
.pipe(
    // Se detiene cuando otro observable emite su primer valor
    takeUntil(
        clickBnt$
    )
)
.subscribe(
    {
        next: val => console.log('next:',val),
        complete: () => console.log('Complete')   
    }
)