

import { link } from "fs";
import { createInterface } from "readline";

const readline = createInterface ( {
    input: process.stdin,
    output: process.stdout,
});

const readlineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
        resolve(userRes);
        readline.close();
        });
    });
};

let balance = 0;

function einzahlen(amount) {
    balance += amount;
    console.log("Das Einzahlen war erfolgreich, Ihr Kontostand beträgt jetzt " + amount);
}

function abheben(amount) {
    if(amount <= balance) {
        console.log("Abheben war erfolgreich, Ihr Kontostand beträgt jetzt " + amount);

    } else {
        console.log("Sie haben nicht genug Geld auf dem Konto zum abheben!");
    }
}

function kontostandAnzeigen() {
    console.log("Aktueller Kontostand " + amount);
    
}

function bankautomat() {
    while (true) {
        
    }
}

    
