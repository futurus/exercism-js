const bigInt = require('./big-integer');

class Grains {
    constructor() {
        this.squares = {};
        this.ttl = bigInt(0);

        for (let i = 1; i <= 64; i++) {
            this.square[i] = bigInt(2).pow(i - 1);
            this.ttl = this.ttl.add(this.square[i]);
        }
    }

    square(n) {
        return this.square[n].toString();
    }

    total() {
        return this.ttl.toString();
    }
}

module.exports = Grains;