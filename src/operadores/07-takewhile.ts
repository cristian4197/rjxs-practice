import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document,'click');

click$
.pipe(
    map ( ({x,y}) => ({x ,y }) ),
    // Retornamos las coordenadas donde el y es menor a 150
    // Esto no considera el y>=150
    // takeWhile( ({y}) => y<=150 )
    // Esto si considera el y>=150
    takeWhile( ({y}) => y<=150 , true)
)
.subscribe(
    {
        next: val => console.log('Next:', val),
        complete: () => console.log('Complete')
    }
)