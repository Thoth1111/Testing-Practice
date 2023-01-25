class Calc {
    constructor (int1, int2) {
        this.int1 = int1;
        this.int2 = int2
    }

    add() {
     return this.int1 + this.int2;
    }

    subtract() {
        return this.int1 - this.int2;
    }

    divide() {
        return this.int1 / this.int2;
    }

    multiply() {
        return this.int1 * this.int2;
    }
}

module.exports = Calc
  