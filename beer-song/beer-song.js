/**
 * Created by vunguyen on 3/15/17.
 */
var BeerSong = function() {

};

BeerSong.prototype.bottle = function(n) {
    return (n === 0 ? "No more" : n) + " bottle" + (n !== 1 ? "s" : "");
};

BeerSong.prototype.first = function(n) {
    return this.bottle(n) + " of beer on the wall, " +
        this.bottle(n).toLowerCase() + " of beer.\n";
};

BeerSong.prototype.second = function(n) {
    return (n === -1 ? "Go to the store and buy some more, " + this.bottle(99) + " of beer on the wall.\n" :
        "Take " + (n === 0 ? "it" : "one") + " down and pass it around, " + this.bottle(n).toLowerCase() + " of beer on the wall.\n");
};

BeerSong.prototype.verse = function(n) {
    return this.first(n) + this.second(n-1);
};

BeerSong.prototype.sing = function(from, to) {
    to = to || 0;
    var out = '';

    for (var i = from; i > to; i--) {
        out += this.verse(i) + "\n";
    }
    out += this.verse(to);

    return out;
};

module.exports = BeerSong;