let a = 7;
let b = 9;

/*let result = 7 + 9;

printResult (result);

result = a -b;
printResult (result);

function printResult(result){
    console.log("Das Ergebnis lautet: " + result);
}
*/

let result = getMaxOf2Numbers(a,b);
console.log(result);

function getMaxOf2Numbers(a,b){
    if (a>b){
        return a;
    } else{
        return b
    }
}