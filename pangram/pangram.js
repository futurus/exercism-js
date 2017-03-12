/**
 * Created by vunguyen on 3/12/17.
 */
var Pangram = function (sentence) {
    this.sentence = sentence.toLowerCase()
                        .replace(/[^a-z]/g,'')
                        .split('')
                        .sort(function(a, b) { if (a > b) { return 1; } else { return -1; }})
                        .join('');
};

Pangram.prototype.isPangram = function () {
    if (this.sentence.length < 26) {
        return false;
    } else {
        var diff = 0;

        for (var i = 1; i < this.sentence.length; i++) {
            if (this.sentence[i] !== this.sentence[i-1]) {
                diff++;
            }
        }

        return diff === 25;
    }
};

module.exports = Pangram;