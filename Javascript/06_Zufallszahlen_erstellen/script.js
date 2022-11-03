let random = Math.random() * 1000
let randomAsInteger = Math.round(random);
console.log(randomAsInteger)

if (randomAsInteger > 500){
    console.log("Bigger than 500");
}

//wenn größer als 800
if (randomAsInteger > 800){
    console.log("Bigger than 800");
}

//wenn zwischen 500 und 800
if (randomAsInteger < 800){
    if (randomAsInteger > 500){
        console.log("between 800 and 500");
    }
}

//wenn zwischen 200 und 500
if (randomAsInteger < 500){
    if (randomAsInteger > 200){
        console.log("between 500 and 200");
    }
}

//wenn zwischen 0 und 200
if (randomAsInteger < 200){
    if (randomAsInteger > 0){
        console.log("between 200 and 0");
    }
}