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
        

