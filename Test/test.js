let generatedNumbers = [];

for(var i = 0; i < 20; i++) {
    let min = Math.ceil(5);
    let max = Math.floor(15);
    let generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(generatedNumber > 12) {
        console.log("${generatedNumber} ist größer als 12");
    }
    generatedNumbers[i] = generatedNumber;
}
logGeneratedNumbers();

function logGeneratedNumbers() {
    let numbersSmaller = 0;
    let numbersBigger = 0;
    for(var i = 0; i <= generatedNumbers.length; i++) {
        if(generatedNumbers[i] > 12) {
            numbersBigger++;
        } else if(generatedNumbers[i] <= 12) {
            numbersSmaller++;
        }
    }

    console.log("Es waren ${numbersSmaller} Nummern kleiner oder gleich 12 und ${numbersBigger} größer als 12");

    generatedNumbers = [];
}
