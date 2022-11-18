 // Erstelle eine Zufallszahl zwischen 5 und 10
var random= Math.random() *(10-5) + 5;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger)

// Wenn der Wert 10 ist gib aus Ten
if(randomAsInteger == 10){
    console.log("Ten");
}
// Wenn der Wert 9 ist gib aus Nine
if(randomAsInteger == 9){
    console.log("Nine");
}
// Wenn der Wert 8 ist gib aus Eight
if(randomAsInteger == 8){
    console.log("Eight");
}
// etc.
if(randomAsInteger == 7){
    console.log("Seven");
}
if(randomAsInteger == 6){
    console.log("Six");
}
if(randomAsInteger == 5){
    console.log("Five");
}