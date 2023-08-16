import { filter, from, fromEvent, map, range } from "rxjs";

// range(1,10).pipe(
//     // Filtrar Numeros impares
//     filter( val => val % 2 ===1)
// ).subscribe(
//     console.log
// );

range(20,30).pipe(
    // Filtrar Numeros impares
    filter( (val, i) => {
        console.log("index:", i);
        
        return val % 2 ===1;
        })
)//.subscribe( console.log);
interface Personaje {
    tipo:string;
    nombre:string;
};

const personajes:Personaje[] = [
    {
        tipo:'heroe',
        nombre:'Batman'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'villano',
        nombre:'Joker'
    }
];

// Imprimimos heroes
// from(personajes)
// .pipe(
//     filter(val => val.tipo! == 'villano')
// ).subscribe(console.log);

// Imprimimos Villano
// from(personajes)
// .pipe(
//     filter(val => val.tipo !== 'heroe')
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    /**Los operadores se ejecutan en orden */
    map( event => event.code),//recibe un KeyboardEvent y emite un string
    filter( key => key ==='Enter' )//recibe un string y emite un string
);

keyup$.subscribe(console.log);