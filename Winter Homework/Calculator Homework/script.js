const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-equals]");
const previousText = document.querySelector("[data-previous]");
const currentText = document.querySelector("[data-current]");

class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear () {
        this.current = "";
        this.previous = "";
        this.operation = undefined;
    }

    delete() {
        this.current = this.current.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.current.includes(".")) return;
        if(this.equalsClicked === true) {
            this.current = "";
            this.equalsClicked = false;
        }
        this.current = this.current.toString() + number.toString();
    }

    chooseOperation(operation) {
        if(this.current === "") return;
        if(this.previous !== "") {
            this.calculate();
        }
        this.operation = operation;
        this.previous = this.current;
        this.current = "";
    } 

    calculate() {
        let calculation;
        const prev = parseFloat(this.previous);
        const curr = parseFloat(this.current);
        if(isNaN(prev) || isNaN(curr)) return;
        switch(this.operation) {
            case "+":
                calculation = prev + curr;
                break;
            case "-":
                calculation = prev - curr;
                break;
            case "X":
                calculation = prev * curr;
                break;
            case "/":
                calculation = prev / curr;
                break;
            default:
                return;
        }
        this.current = calculation;
        this.operation = undefined;
        this.previous = "";
        this.equalsClicked = true;
    }

    updateDisplay() {
        this.currentText.innerText = this.current;

        if(this.operation != null) {
            this.previousText.innerText = `${this.previous} ${this.operation}`;
        } else {
            this.previousText.innerText = "";
        }
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button => {
    calculator.calculate();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})


let calculator = new Calculator(previousText, currentText);