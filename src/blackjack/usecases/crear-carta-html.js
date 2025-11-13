/**
 * Crea el elemento imagen HTML de la carta.
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna la imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {
    
    if (typeof carta !== 'string' || !carta) {
        throw new Error('La carta debe ser un string no vacío');
    }
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta; 
}
