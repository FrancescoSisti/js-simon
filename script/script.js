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

const numberContainer = createNumberContainer();

// Timer di 30 secondi
const startTimer = () => {
    console.log("Timer avviato");
    setTimeout(() => {

        console.log("Timer scaduto, rimozione dei numeri");

        numberContainer.remove();
        createInputForm();
    }, 30000); // 30 secondi
};

// Crea 5 input per l'utente
const createInputForm = () => {

    console.log("Creazione del form di input");

    const inputForm = document.createElement('form');
    inputForm.innerHTML = `
        <h2>Inserisci i numeri che ricordi:</h2>
        ${Array.from({ length: 5 }, (_, i) => `<input type="number" id="number${i + 1}" required>`).join('')}
        <button type="submit">Verifica</button>
    `;
    document.body.appendChild(inputForm);
    inputForm.addEventListener('submit', handleFormSubmission);
};

// Gestisci la sottomissione del form
const handleFormSubmission = (e) => {
    e.preventDefault();

    console.log("Form inviato");

    const enteredNumbers = Array.from({ length: 5 }, (_, i) => parseInt(document.getElementById(`number${i + 1}`).value, 10));

    console.log("Numeri inseriti dall'utente:", enteredNumbers);

    const correctNumbers = enteredNumbers.filter(num => randomNumbers.includes(num));

    console.log("Numeri corretti:", correctNumbers);

    displayResult(correctNumbers);
};

// Mostra il risultato
const displayResult = (correctNumbers) => {
    const resultContainer = document.createElement('div');
    resultContainer.id = 'result';
    resultContainer.innerHTML = `
        <h3>Risultato:</h3>
        <p>Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}</p>
    `;
    document.body.appendChild(resultContainer);

    console.log("Risultato mostrato all'utente");
};

// Avvia il gioco
startTimer();
