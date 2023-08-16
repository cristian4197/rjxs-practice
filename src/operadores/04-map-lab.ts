import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus imperdiet massa sit amet placerat. Sed suscipit orci id urna tincidunt ornare consequat eget nisi. Nunc cursus ultricies nunc, sit amet pellentesque libero rutrum sed. Nulla cursus in ante eget gravida. Integer id sodales sapien. Ut pretium est sit amet accumsan rhoncus. Maecenas vitae pharetra ligula. Donec elit dolor, viverra in sollicitudin sit amet, congue vel purus. Fusce finibus nulla sem, non posuere nisl vehicula sed.
<br><br>
Aenean vitae pellentesque orci. Donec aliquet suscipit neque, ac tristique enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum sodales dignissim. Vestibulum convallis enim sit amet risus vulputate maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non quam accumsan, tincidunt turpis et, sollicitudin nibh. Donec sodales tortor eget varius pellentesque.
<br><br>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum posuere turpis a est rhoncus viverra. Etiam id rhoncus eros. Sed non finibus sapien. Pellentesque venenatis tristique dolor nec auctor. Ut purus elit, fringilla ut leo ut, lacinia hendrerit lorem. Cras quis nisl dolor. Maecenas blandit, erat ac faucibus placerat, risus neque mollis odio, sodales vehicula turpis tellus non arcu. Proin consectetur volutpat molestie.
<br><br>
Donec blandit a nisl et facilisis. Quisque accumsan dui diam. Donec in condimentum orci, eget ultrices dui. Ut tempus semper massa non molestie. Cras quis dui vestibulum, pulvinar eros ut, hendrerit leo. Fusce efficitur porttitor nisi. Etiam vitae tortor dapibus ante tempor mattis. Nam erat turpis, cursus nec ligula eget, dictum ultrices risus. Maecenas molestie felis ac sapien tincidunt, accumsan auctor augue ultrices.
<br><br>
Aenean elementum augue a feugiat lobortis. Sed quam tortor, elementum non dolor congue, molestie sollicitudin lacus. Phasellus et odio eu justo fringilla pretium. Sed venenatis elit sit amet dictum viverra. Cras auctor arcu metus, sed porttitor ex fermentum non. Morbi non nulla imperdiet justo vehicula posuere. Vivamus porttitor euismod neque. Vestibulum egestas gravida ligula malesuada posuere.
<br><br>
Generados 5 párrafos, 322 palabras, 2229 bytes de Lorem Ipsum
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class','progress-bar');

body.append(progressBar);

//Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
    } 
    = event.target.documentElement;
    return (scrollTop/(scrollHeight- clientHeight))*100;
    
};
//Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
});