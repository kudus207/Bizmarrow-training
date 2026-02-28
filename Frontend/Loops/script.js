/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("frizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("frizz");
    } else {
        console.log(i);
    }

}
*/

let text = "kUDus";

let newText = text.slice(0, 1).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();


newText.prompt();

console.log(newText);
