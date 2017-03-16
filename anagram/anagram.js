/**
 * Created by vunguyen on 3/15/17.
 */
var Anagram = function (word) {
    this.word = word;
};

Anagram.prototype.sort = function (word) {
    return word.split('').sort(function (a, b) {
        if (a > b) return 1;
        return -1;
    }).join('');
};

Anagram.prototype.matches = function () {
    var wList = [];

    if (typeof arguments['0'] === 'string') {
        for (var word of arguments) {
            wList.push(word);
        }
    } else {
        wList = arguments['0'];
    }

    var anagrams = [];
    var anagram = this.sort(this.word.toLowerCase());

    for (var word of wList) {
        if (word.toLowerCase() !== this.word.toLowerCase()
            && anagram === this.sort(word.toLowerCase())) {
            anagrams.push(word);
        }
    }

    return anagrams;
};

module.exports = Anagram;