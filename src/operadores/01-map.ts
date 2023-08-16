import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1,5).pipe(
    // Entra un number (1er parametro, y sale un number(2do parametro)
//     map<number, number>( val => val*10 )
//     )
// .subscribe(console.log);

// range(1,5).pipe(
    // Entra un number (1er parametro, y sale un string(2do parametro)
//     map<number, string>( val => (val*10).toString() )
//     )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
);

keyupCode$.subscribe( code  => console.log('map', code));
