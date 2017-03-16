/**
 * Created by vunguyen on 3/16/17.
 */
var FoodChain = function () {
};

FoodChain.prototype.header = function (n) {
    switch (n) {
        case 1:
            return 'I know an old lady who swallowed a fly.\n';
        case 2:
            return 'I know an old lady who swallowed a spider.\n' +
                'It wriggled and jiggled and tickled inside her.\n';
        case 3:
            return 'I know an old lady who swallowed a bird.\n' +
                'How absurd to swallow a bird!\n';
        case 4:
            return 'I know an old lady who swallowed a cat.\n' +
                'Imagine that, to swallow a cat!\n';
        case 5:
            return 'I know an old lady who swallowed a dog.\n' +
                'What a hog, to swallow a dog!\n';
        case 6:
            return 'I know an old lady who swallowed a goat.\n' +
                'Just opened her throat and swallowed a goat!\n';
        case 7:
            return 'I know an old lady who swallowed a cow.\n' +
                'I don\'t know how she swallowed a cow!\n';
    }
};

FoodChain.prototype.body = function (n) {
    out = '';
    switch (n) {
        case 7:
            out += 'She swallowed the cow to catch the goat.\n';
        case 6:
            out += 'She swallowed the goat to catch the dog.\n';
        case 5:
            out += 'She swallowed the dog to catch the cat.\n';
        case 4:
            out += 'She swallowed the cat to catch the bird.\n';
        case 3:
            out += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
        case 2:
            out += 'She swallowed the spider to catch the fly.\n';
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