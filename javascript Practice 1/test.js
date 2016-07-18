var finalNumber = 120;

alert("Make a calculation where the answer is: " + finalNumber);

var numberOne = prompt("Enter first number:");
var numberTwo = prompt("Enter the second number:");
var modifier = prompt("Add the modifiër [+, -, *, /]");
var calculationText = numberOne.concat(modifier).concat(numberTwo);
var test = numberOne + modifier + numberTwo;

var calculation = eval(calculationText);

if(calculation === finalNumber){
    document.write("YES that is the calculation we need, well done. :)");
    console.log(calculationText + " = " + calculation);
}
else if(calculation > (finalNumber + 20) || calculation < (finalNumber - 20)){
        console.log(calculationText + " = " + calculation);
        alert("Nope, try again. ;)");
}
else{
    alert("you are close please add another number and modifiër: " + calculation);

    var currentNumber = calculation;
    var newNumber = prompt("Enter a new number here:");
    var newModifier = prompt("enter a new modifier:");

    var newCalculationText = calculationText.concat(newModifier).concat(newNumber);
    var newCalculation = eval(String(currentNumber).concat(newModifier).concat(newNumber));

    if (newCalculation === finalNumber) {
        console.log(newCalculationText + " = " + newCalculation);
        document.write("YES now you have the calculation we need, well done. :)");
    }
    else{
        console.log(document.write(newCalculationText + " = " + newCalculation));
        alert("Nope, try again. ;)");
    }
}