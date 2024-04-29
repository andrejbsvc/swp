import { resolve } from "path";
import { createInterface } from "readline";
 
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            //readline.close();
        });
    });
};
 
let balance = 0;
mainmenu();
 
async function mainmenu() {
    console.log("Selektieren sie die gewünschte Funktion");
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Beenden");
    let selection = await readLineAsync();
    switch(selection) {
        case "1":
            await Einzahlen();
            break;
        case "2":
            await Abheben();
            break;
        case "3":
            Kontostand();
            break;
        case "4":
            Beenden();
            break;
    }
}
 
async function Einzahlen() {
    console.log("Wie viel möchten sie einzahlen?");
    let amount = await readLineAsync();
    balance += parseInt(amount);;
    console.log(`Ihr neuer Kontostand beträgt ${balance}`);
    mainmenu();
}
 
async function Abheben() {
    console.log("Wie viel möchten sie abheben?");
    let amount = await readLineAsync();
    balance -= parseInt(amount);
    console.log(`Ihr neuer Kontostand beträgt ${balance}`);
    mainmenu();
}
 
function Kontostand() {
    console.log(`Ihr Kontostand beträgt ${balance}`);
    mainmenu();
}
 
function Beenden() {
    console.log("Machine is stopping...");
    readline.close();
    process.exit();
}
