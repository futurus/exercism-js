/**
 * Created by vunguyen on 3/20/17.
 */

var SpaceAge = function (ageInSecond) {
    this.seconds = ageInSecond;
};

SpaceAge.prototype.base = function (n) {
    var secondsPerEarthYear = 60 * 60 * 24 * 365.25;
    return Math.round(this.seconds / secondsPerEarthYear / n * 100) / 100;
};

SpaceAge.prototype.onEarth = function () {
    return this.base(1);
};

SpaceAge.prototype.onMercury = function () {
    return this.base(0.2408467);
};

SpaceAge.prototype.onVenus = function () {
    return this.base(0.61519726);
};

SpaceAge.prototype.onMars = function () {
    return this.base(1.8808158);
};

SpaceAge.prototype.onJupiter = function () {
    return this.base(11.862615);
};

SpaceAge.prototype.onSaturn = function () {
    return this.base(29.447498);
};

SpaceAge.prototype.onUranus = function () {
    return this.base(84.016846);
};

SpaceAge.prototype.onNeptune = function () {
    return this.base(164.79132);
};

module.exports = SpaceAge;