import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos
 * @param {Array<String>} deck
 * @param {HTMLElement} divCartasComputadora
 * @param {HTMLElement} puntosHTML
 *   
 */
export const turnoComputadora = ( puntosMinimos, deck, divCartasComputadora, puntosHTML ) => {

    if (!Array.isArray(deck) || deck.length === 0) {
        throw new Error('El deck debe ser un arreglo no vacío');
    }

    if (!Array.isArray(deck) || deck.length === 0) {
        throw new Error('El deck debe ser un arreglo no vacío');
    }

    if (typeof divCartasComputadora === 'undefined' || !(divCartasComputadora instanceof HTMLElement)) {
        throw new Error('divCartasComputadora debe ser un HTMLElement válido');
    }

    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
