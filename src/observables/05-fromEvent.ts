import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */

const src$ = fromEvent<PointerEvent> (document, 'click');
const src2$ = fromEvent<KeyboardEvent> (document, 'keyup');

const observer = {
    next: (val) => console.log('next', val)
};

// Desestructuramos las propiedas del PointerEvent
src$.subscribe( ({ x ,y }) => {
    console.log(x);
    console.log(y);
});

src2$.subscribe(event => {
    console.log(event.key);
});