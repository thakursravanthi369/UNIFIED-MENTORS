let display = document.getElementById("display");
        
function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDecimal() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}