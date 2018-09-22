const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

const toSecret = document.getElementById('toSecret');
const toWords = document.getElementById('toWords');

toSecret.addEventListener('click', (e) => {
    let wordInput = document.getElementById('wordInput').value;
    const wordArray = wordInput.split('');
    const codeArray = wordArray.forEach(element => {
        const newCode = element.charCodeAt();
        return newCode
    });
    
    printToDom(codeArray, 'codeMade')
})

toWords.addEventListener('click', (e) => {
    let codeInput = document.getElementById('codeInput').value;
    printToDom(codeInput, 'codeBrake');
})