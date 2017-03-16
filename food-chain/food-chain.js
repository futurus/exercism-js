/**
 * Created by vunguyen on 3/16/17.
 */
var FoodChain = function () {
};

FoodChain.prototype.header = function (n) {
    phrase = 'I know an old lady who swallowed a ';
    switch (n) {
        case 1:
            return phrase + 'fly.\n';
        case 2:
            return phrase + 'spider.\n' + 'It wriggled and jiggled and tickled inside her.\n';
        case 3:
            return phrase + 'bird.\n' + 'How absurd to swallow a bird!\n';
        case 4:
            return phrase + 'cat.\n' + 'Imagine that, to swallow a cat!\n';
        case 5:
            return phrase + 'dog.\n' + 'What a hog, to swallow a dog!\n';
        case 6:
            return phrase + 'goat.\n' + 'Just opened her throat and swallowed a goat!\n';
        case 7:
            return phrase + 'cow.\n' + 'I don\'t know how she swallowed a cow!\n';
    }
};

FoodChain.prototype.body = function (n) {
    sst = 'She swallowed the ';
    tct = ' to catch the ';
    out = '';

    switch (n) {
        case 7:
            out += sst + 'cow' + tct + 'goat.\n';
        case 6:
            out += sst + 'goat' + tct + 'dog.\n';
        case 5:
            out += sst + 'dog' + tct + 'cat.\n';
        case 4:
            out += sst + 'cat' + tct + 'bird.\n';
        case 3:
            out += sst + 'bird' + tct + 'spider that wriggled and jiggled and tickled inside her.\n';
        case 2:
            out += sst + 'spider' + tct + 'fly.\n';
        default:
            break;
    }
    return out;
};

FoodChain.prototype.footer = function () {
    return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
};

FoodChain.prototype.verse = function (n) {
    if (n == 8) {
        return 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
    } else {
        return this.header(n) + this.body(n) + this.footer();
    }
};

FoodChain.prototype.verses = function (m, n) {
    if (m < n) {
        out = '';
        for (var i = m; i <= n; i++) {
            out += this.verse(i) + '\n';
        }
        return out;
    }
    return 'Invalid';
};

module.exports = FoodChain;