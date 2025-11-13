
/**
 * Extrae el valor de la carta.
 * @param {String} carta Ejemplo '2D' o '10S' o 'JH' 
 * @returns {Number} El valor de la carta como número
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}