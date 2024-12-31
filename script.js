var display = document.getElementById('display');
var operation;

var cleanAll = document.getElementById('clean-button').addEventListener('click', function() {
    display.value = "";
    operation = "";
});

var numberButtons = document.querySelectorAll('.number-button').forEach(function(button) {
    button.addEventListener('click', function() {
        display.value += button.value;
        operation += button.value;
    });
});

var validOperators = document.querySelectorAll('.operator').forEach(function(operator) {
    operator.addEventListener('click', function() {
        display.value += operator.value;
        operation += operator.value;
    });
});

var module = document.getElementById('mod').addEventListener('click', function() {
    display.value += "mod";
    operation += "%"
});

var calculate = document.getElementById('equal-operator').addEventListener('click', function() {
    try {
        console.log(eval(operation));
    } catch(error) {
        console.log("error");
    }
}); 