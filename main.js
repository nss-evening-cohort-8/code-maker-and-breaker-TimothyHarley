const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const toSecret = document.getElementById('toSecret');
const toWords = document.getElementById('toWords');

toSecret.addEventListener('click', (e) => {
    let wordInput = document.getElementById('wordInput').value;
    printToDom(wordInput, 'codeMade')
})

toWords.addEventListener('click', (e) => {
    let codeInput = document.getElementById('codeInput').value;
    printToDom(codeInput, 'codeBrake');
})