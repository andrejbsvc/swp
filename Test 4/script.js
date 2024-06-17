//gib jeders zweite wort aus, verdopple jeden buchstaben und ersetze leerzeichen mit _

const data2 = "Das Leben ist schön";

const words = data2.split(' ');
let result = "";



for (let i = 1; i < words.length; i += 2) {
    const letters = words[i].split('');
    for (let j = 0; j < letters.length; j++) {
        result += letters[j] + letters[j];
    }
    if (i < words.length - 1) {
        result += '_';
    }
}

console.log(result);


const data1 = "4,9,-3,-9,-5,10,2,1,14";

const numbers = data1.split(',');
result = 0;
let count = 0;
for(let i = 0; i < numbers.length; i++) {
    if(i > 0 && i % 2 == 0) {
        result += parseInt(numbers[i]);
        count++;
    }
}

console.log(result / count);

const data3 = "Das Leben ist schön";
const arr = data3.split("")
let c = ["ä", "ö", "ü"];
let r = "";

let counter = 0;
for(let i = 0; i < arr.length; i++) {
    if(c.includes(arr[i])) {
        counter++;
        if(arr[i] == "ä") {
            r += "ae"
        } else if(arr[i] == "ö") {
            r += "oe";
        } else if(arr[i] == "ü") {
            r += "ue";
        }
    } else {
        r += arr[i];
    }
}
console.log(counter);
console.log(r);


const data = "Hans geht heute schwimmen das ist gut";
let array = data.split(" ");
let reverseArr= [];
for(let i = arr.length - 1; i >= 0; i--) {
    if(i == 0) {
        reverseArr.push(arr[i]);
    } else {
        reverseArr.push(arr[i] + " ");
    }
}
console.log(reverseArr);


