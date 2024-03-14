//! Pali
//TODO Palidroma
//TODO Chiedere all’utente di inserire una parola
//TODO Creare una funzione per capire se la parola inserita è palindroma

//&input
const userInputPali = document.getElementById("user-input-pali");
//&buttons
const sendButtonPali = document.getElementById("send-button-pali");
const cancelButtonPali = document.getElementById("cancel-button-pali");
//&outout
const responsePali = document.getElementById("response-pali");


sendButtonPali.addEventListener('click', function () {
    responsePali.innerHTML = "";
    if (isNaN(userInputPali.value)) {
        let parola = userInputPali.value.toLowerCase();
        responsePali.innerHTML += paliWord(parola) ? `The word (${parola}) is a palindrome!` : `The word  (${parola}) is not a palindrome!`
    } else {
        alert("inserisci una parola")
    }
})

function paliWord(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - (i + 1)]) {
            return false
        }
    }
    return true;
}

cancelButtonPali.addEventListener('click', function () {
    responsePali.innerHTML = userInputPali.value = "";
})



//!Pari e Dispari
//TODO L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//TODO Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//TODO Sommiamo i due numeri
//TODO Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//TODO Dichiariamo chi ha vinto.

//&input
const userInputOddOrEven = document.getElementById("user-input-odd-or-even");
//&buttons
const sendButtonOddOrEven = document.getElementById("send-button-odd-or-even");
const cancelButtonOddOrEven = document.getElementById("cancel-button-odd-or-even");
const evenChoice = document.getElementById("even");
const oddChoice = document.getElementById("odd")
//&outout
const responseOddOrEven = document.getElementById("response-odd-or-even");

//^FUNCTIONS
function enableElements(elements) {
    elements.forEach(element => {
        if (element.disabled) {
            element.disabled = false;
        }
    });
}
function compareNumbers(firstNumber, SecondNumber) {
    let sum = firstNumber + SecondNumber;
    if (sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}


//~CODE

evenChoice.addEventListener("click", () => {
    enableElements([sendButtonOddOrEven, userInputOddOrEven]);
    userInputOddOrEven.placeholder = "Insert a number from 1 to 5"
})
oddChoice.addEventListener("click", () => {
    enableElements([sendButtonOddOrEven, userInputOddOrEven]);
    userInputOddOrEven.placeholder = "Insert a number from 1 to 5"
})

sendButtonOddOrEven.addEventListener('click', function () {
    //controllo input
    let userNumberChoice = parseInt(userInputOddOrEven.value)
    if (isNaN(userNumberChoice) || userNumberChoice < 1 || userNumberChoice > 5) {
        alert("Devi Inserire un numero valido tra 1 e 5")
        userNumberChoice.innerHTML = ""
    } else {
        let pcNmber = getRndInteger(1, 5);
        let compareResults = compareNumbers(userNumberChoice, pcNmber);
        let userChoice = evenChoice.checked === true ? "even" : "odd";
        if (compareResults === userChoice) {
            responseOddOrEven.innerHTML = `User won beacuse he chose ${userChoice} and ${userNumberChoice}, which when added to the number chosen by the computer (${pcNmber}) resulted in ${compareResults}.`
        } else {
            responseOddOrEven.innerHTML = `User lose beacuse he chose ${userChoice} and ${userNumberChoice}, which when added to the number chosen by the computer (${pcNmber}) resulted in ${compareResults}.`
        }
    }
})

cancelButtonOddOrEven.addEventListener('click', function () {
    evenChoice.checked = oddChoice.checked = false;
    sendButtonOddOrEven.disabled = userInputOddOrEven.disabled = true;
    userInputOddOrEven.placeholder = "Choose Odd or Even to procede..."
    responseOddOrEven.innerHTML = userInputOddOrEven.value = "";
})