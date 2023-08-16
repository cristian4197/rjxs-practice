import { asyncScheduler, range, scheduled } from  'rxjs';

// const src = range (1,5);
//Usamos scheduled porque en la version 8 se deprecara el uso directo de asyncScheduler
const src = scheduled(range(1,5), asyncScheduler);


console.log("Inicio");

src.subscribe(console.log);

console.log("Fin");