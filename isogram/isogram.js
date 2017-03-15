/**
 * Created by vunguyen on 3/14/17.
 */
var Isogram = function (word) {
    this.word = word;
};

Isogram.prototype.isIsogram = function() {
    var formattedWord = this.word.toLowerCase()
        .replace(/[-\s]/g, '')
        .split('')
        .sort(function(a, b) { if (a < b) return -1; return 1; });

    for (var i = 1; i < formattedWord.length; i++) {
        if (formattedWord[i] === formattedWord[i-1]) {
            return false;
        }
    }
    return true;
};

module.exports = Isogram;