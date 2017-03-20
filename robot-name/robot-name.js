/**
 * Created by vunguyen on 3/20/17.
 */
var usedNames = {};

var Robot = function () {
    this.reset();
};

Robot.prototype.reset = function () {
    do {
        this.name = this.genName();
    } while (usedNames[this.name]);
    usedNames[this.name] = true;
};

Robot.prototype.prefix = function (len) {
    var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array(len).join().split(',').map(function () {
        return l.charAt(Math.floor(Math.random() * l.length));
    }).join('');
};

Robot.prototype.suffix = function (len) {
    var d = "0123456789";

    return Array(len).join().split(',').map(function () {
        return d.charAt(Math.floor(Math.random() * d.length));
    }).join('');
};

Robot.prototype.genName = function () {
    return this.prefix(2) + this.suffix(3);
};

module.exports = Robot;