 // Erstelle eine Variable banana mit dem Wert "Banane"
 let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";


// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;


// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleAverageKilo = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaAverageKilo = 0.22;

let resultApple = 1/appleAverageKilo;
let resultBanana = 1/bananaAverageKilo;
let priceApple = resultApple/applePricePerKilo;
let priceBanana = resultBanana/bananaPricePerKilo;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
console.log("Ein Kilo Äpfel enthält " + resultApple + " Äpfel");
console.log("Ein Kilo Bananen enthält " + resultBanana + " Bananen");
console.log("Ein Apfel kostet " + priceApple + "€");
console.log("Eine Banane kostet " + priceBanana + "€");

// Preis von 8 Äpfeln
priceApple = priceApple *8;
console.log("8 Äpfel kosten " + priceApple + "€");

// Preis von 17 Bananen
priceBanana = priceBanana*17;
console.log("17 Bananen kosten " + priceBanana + "€");

// Preis von 1 Tonne Äpfel
applePricePerKilo = applePricePerKilo*1000;
console.log("1 Tonne Äpfel kosten " + applePricePerKilo + "€");

// Preis von 1 Tonne Bananen
bananaPricePerKilo = bananaPricePerKilo*1000;
console.log("1 Tonne Bananen kosten " + bananaPricePerKilo + "€");
