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
    console.log("Izaberite Funktiu koju ocete da uzmete");
    console.log("1. Uplatiti");
    console.log("2. Podigniti");
    console.log("3. Racun");
    console.log("4. Kraj");
    let selection = await readLineAsync();
    switch(selection) {
        case "1":
            await aPaymentIn();
            break;
        case "2":
            await getMoneyfromBalance();
            break;
        case "3":
            checkBalance();
            break;
        case "4":
            Stop();
            break;
    }
}

 
async function aPaymentIn() {
    console.log("Koliko ocete da uplatite?");
    let amount = await readLineAsync();
    balance += parseInt(amount);;
    console.log(`Vas novi Racun je sad kod ${balance}`);
    mainmenu();
}
 
async function getMoneyfromBalance() {
    console.log("Koliko ocete da podignete?");
    let amount = await readLineAsync();
    balance -= parseInt(amount);
    console.log(`Vas novi Racun je sad kod ${balance}`);
    mainmenu();
}
 
function checkBalance() {
    console.log(`Vas Racun je sad kod ${balance}`);
    mainmenu();
}
 
function Stop() {
    console.log("Masina se gasi...");
    readline.close();
    process.exit();
}