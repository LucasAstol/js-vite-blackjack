
/**
 * Esta función permite tomar una carta del deck.
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} retorna sa carta del deck.
 */
export const pedirCarta = ( deck ) => {

    if (!Array.isArray(deck) || deck.length === 0) {
        throw new Error('El deck debe ser un arreglo no vacío');
    }

    const carta = deck.pop();
    return carta;
}