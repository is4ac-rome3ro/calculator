var display = document.getElementById('display');
var operation;
var sqrtOperation = false;
var sqrtNumber = "";

var cleanAll = document.getElementById('clean-button').addEventListener('click', function() {
    display.value = "";
    operation = "";
    sqrtOperation = false;
});

var numberButtons = document.querySelectorAll('.number-button').forEach(function(button) {
    button.addEventListener('click', function() {
        if(sqrtOperation) {
            sqrtNumber += button.value;
            console.log(sqrtNumber)
        } else {
            operation += button.value;
        }

        display.value += button.value;
    });
});

var validOperators = document.querySelectorAll('.operator').forEach(function(operator) {
    operator.addEventListener('click', function() {
        if(sqrtOperation) {
            operation += String(Math.sqrt(Number(sqrtNumber)));
            sqrtNumber = "";
            sqrtOperation = false;
        } 

        operation += operator.value;
        display.value += operator.value;

    });
});

var module = document.getElementById('mod').addEventListener('click', function() {
    display.value += "mod";
    operation += "%"
});

var pi = document.getElementById('pi').addEventListener('click', function() {
    display.value += "3.14";
    operation += "3.14"
});

var sqr = document.getElementById('sqr').addEventListener('click', function() {
    display.value += "V";
    sqrtOperation = true;
});

var calculate = document.getElementById('equal-operator').addEventListener('click', function() {
    try {
        if(sqrtOperation) {
            operation += String(Math.sqrt(Number(sqrtNumber)));
            sqrtOperation = false;
            sqrtNumber = "";
        } else {
            console.log(eval(operation));
        }

    } catch(error) {
        console.log("error");
    }
}); 