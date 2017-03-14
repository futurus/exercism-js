/**
 * Created by vunguyen on 3/14/17.
 */
var Bob = function () {
};

Bob.prototype.hey = function (sentence) {
    var s = sentence.replace(/\s/g, '');
    if (s === '') {
        return 'Fine. Be that way!';
    } else if (s.match(/[a-zA-Z]/) && s.toUpperCase() === s) {
        return 'Whoa, chill out!';
    } else if (s[s.length - 1] === '?') {
        return 'Sure.';
    } else {
        return 'Whatever.';
    }
};

module.exports = Bob;