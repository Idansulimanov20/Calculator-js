const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === "^2") {
        display.value = (Math.pow(parseFloat(display.value), 2)).toString();
    } else if (value === "√") {
        display.value = (Math.sqrt(parseFloat(display.value))).toString();
    } else {
        display.value += value;
    }
}

function toggleSign() {
    if (display.value !== "") {
        display.value = display.value.startsWith("-") ? display.value.slice(1) : "-" + display.value;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);  
        display.value = result.toString();  
    } catch {
        display.value = "Error";
    }
}
