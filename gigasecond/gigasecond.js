/**
 * Created by vunguyen on 3/14/17.
 */
var Gigasecond = function (date) {
    this._date = date;
};

Gigasecond.prototype.date = function() {
    return new Date(this._date.getTime() + Math.pow(10, 9) * 1000);
};

module.exports = Gigasecond;