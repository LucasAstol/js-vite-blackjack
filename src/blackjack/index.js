import _ from 'underscore';
// Esta es la forma standard de hacerlo llamando lo que se quiere importar específicamente
// import {crearDeck} from './usecases/crear-deck'; 

//Luego se puede especificar lo que se quiere importar y asignarle un nombre a usarse en el contexto del archivo
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';

// También la exportación por defecto se hace asignandole un nombre pero sin especificar que se quiere importar
// ya que se importara por defecto lo que esté así especificado en el archivo a importar.
//import crearDeck from './usecases/crear-deck';

//Varios imports de exports agrupados en un solo archivo.
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases/index';



/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, divCartasComputadora, puntosHTML );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, divCartasComputadora, puntosHTML );
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, deck, divCartasComputadora, puntosHTML );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
});
