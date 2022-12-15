function buttonClicked(){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result1 = parseFloat(num1) + parseFloat(num2);
    console.log(result1);
}

function buttonClicked2(){
    let num3 = document.getElementById("number2").value;
    let num4 = document.getElementById("number3").value;
    let result2 = parseFloat(num4) - parseFloat(num3);
    console.log(result2);
}

function buttonClicked3(){
    let num5 = document.getElementById("number5").value;
    let num6 = document.getElementById("number6").value;
    let result3 = parseFloat(num5) * parseFloat(num6);
    console.log(result3);
}

function buttonClicked4(){
    let num7 = document.getElementById("number7").value;
    let num8 = document.getElementById("number8").value;
    let result4 = parseFloat(num7) / parseFloat(num8);
    console.log(result4);
}
