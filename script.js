var display = document.getElementById('display'); //catch the display
var operation = ""; //variable used to makes the calculation and tell the result
var sqrtOperation = false; //linked with the sqr botton
var sqrtNumber = ""; //variable to save the user`s number to be squaretered root? haha  

var clearAll = document.getElementById('clear-button').addEventListener('click', function() { //name auto-explained 
    display.value = "";
    operation = "";
    sqrtOperation = false;
});

var numberButtons = document.querySelectorAll('.number-button').forEach(function(button) {
    button.addEventListener('click', function() { //add a trigger at each number button 
        if(sqrtOperation) { 
            sqrtNumber += button.value;
        } else {
            operation += button.value; 
        }

        display.value += button.value; //display the value updated
    });
});

//for this one i prefeered to separate the valid operators and the non valid ones
var validOperators = document.querySelectorAll('.operator').forEach(function(operator) {
    operator.addEventListener('click', function() { //same as the others
        if(sqrtOperation) {
            operation += String(Math.sqrt(Number(sqrtNumber)));
            sqrtNumber = "";
            sqrtOperation = false;
        } 

        //display the value updated and add to the operation more information
        operation += operator.value;
        display.value += operator.value;

    });
});

//a short brief of explanation: i added event listeners for each non valid operators because they have different methods to act in calculator 
var module = document.getElementById('mod').addEventListener('click', function() {
    display.value += "mod"; //add the sign of the module in display 
    operation += "%" //add the % operator in the operation
});

var pi = document.getElementById('pi').addEventListener('click', function() {
    //add the value of pi in each variable
    display.value += Math.PI; 
    operation += Math.PI
});

var sqr = document.getElementById('sqr').addEventListener('click', function() {
    display.value += "V"; 
    sqrtOperation = true;
});

var times = document.getElementById('times').addEventListener('click', function() {
    display.value += "x"; 
    operation += "*";
});

var exponentiation = document.getElementById('expo').addEventListener('click', function() {
    let organizedArrayNumber = [];
    let numberToBeExpo = "";

    let index = operation.length - 1; 

    while(index > -1) {
        if(
            operation[index] == "(" || 
            operation[index] == ")" ||
            operation[index] == "-" ||
            operation[index] == "+"
        ) {
            break;
        } else {
            organizedArrayNumber.push(operation[index]);
            index--;
        }
    };

    numberToBeExpo = organizedArrayNumber.reverse().join('');
    
});

var calculate = document.getElementById('equal-operator').addEventListener('click', function() {
    try {
        if(sqrtOperation) {
            sqrtOperation = false;
            operation += String(Math.sqrt(Number(sqrtNumber)));
            sqrtNumber = "";
        } else {
            console.log(eval(operation));
        }

    } catch(error) {
        console.log("error");
    }
}); 