console.log(`JS OK`);

/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.*/

// Funzione per generare numeri casuali
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Genera 5 numeri casuali
const randomNumbers = Array.from({ length: 5 }, () => generateRandomNumber(1, 100));

console.log("Numeri casuali generati:", randomNumbers);

// Visualizza i numeri in pagina
const createNumberContainer = () => {
    const numberContainer = document.createElement('div');
    numberContainer.id = 'numberContainer';
    numberContainer.innerHTML = `<h2>Memorizza questi numeri:</h2><p>${randomNumbers.join(', ')}</p>`;
    document.body.appendChild(numberContainer);

    console.log("Contenitore dei numeri aggiunto alla pagina");
    return numberContainer;
};