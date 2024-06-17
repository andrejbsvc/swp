//Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen
//Berechne den Mittelwert, dann
//addiere jede 4te Zahl und dividiere die Summe durch den Mittelwert


const data1 = "5,2,3,4,1,2,3,5,10,-11"; 

const numbers = data1.split(',');

let result = 0;
let straightNumbers = 0;

for(let i = 0; i < numbers.length; i += 3) {
    result *= parseInt(numbers[i]);
}
for(let i = 0; i < numbers.length; i++) {
    if(parseInt(numbers[i]) % 2 == 0) {
        straightNumbers ++;
    }
}
let Mittelwert = result / straightNumbers;
let sum = 0;
for(let i = 0; i < numbers.length; i += 4) {
    sum += parseInt(numbers[i]);
}
console.log(Mittelwert / sum);


//Zähle die negativnen Zahlen, die positiven Zahlen und die Anzahl von 0 
// Gib die prozentuelle Verteilung an 

const data2 = "1,2,3,4,0,-2,0,-1,5,6,7,8,9,10,11,12";
const number = data2.split(",");

let positive = 0;
let negative = 0;
let zero = 0;

for(let i = 0; i < number.length; i++) {
    if(parseInt(number[i]) > 0) {
        positive++;
    } else if(parseInt(number[i]) < 0) {
        negative++;
    } else {
        zero++;
    }
}

let ppercent = (positive / number.length) * 100;
let npercent = (negative / number.length) * 100;
let zpercent = (zero / number.length) * 100;

console.log(ppercent, npercent, zpercent);



//gib nur die Wörter aus, die kein e UND kein r enthalten

const data3 = "Hans ist ein netter Kerl!";

const words = data3.split(" ");

for(let i = 0; i < words.length; i++) {
    if(!words[i].includes("e") && !words[i].includes("r")) { //überprüfen ob das word ein e oder r included
        console.log(words[i]);
    }
}
