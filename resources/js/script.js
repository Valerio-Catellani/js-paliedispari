
//TODO Palidroma
//TODO Chiedere all’utente di inserire una parola
//TODO Creare una funzione per capire se la parola inserita è palindroma


//! Pali
//&input
const userInput = document.getElementById("user-input");
//&buttons
const sendButton = document.getElementById("send-button");
const cancelButton = document.getElementById("cancel-button");
//&outout
const response = document.getElementById("response");


sendButton.addEventListener('click', function () {
    response.innerHTML = "";
    if (isNaN(userInput.value)) {
        let parola = userInput.value;
        response.innerHTML += paliWord(parola) ? `La parola scelta (${parola}) è un palindromo!` : `La parola scelta (${parola}) non è un palindromo!`
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

cancelButton.addEventListener('click', function () {
    response.innerHTML = userInput.value = "";
})

