class Calculator {
    constructor(firstNumber,secondNumber){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    add() {
        return this.firstNumber + this.secondNumber;
    }

    product () {
        return this.firstNumber * this.secondNumber;
    }

}

module.exports = Calculator;