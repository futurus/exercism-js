/**
 * Created by vunguyen on 3/15/17.
 */

var PhoneNumber = function(pNumber) {
    this.pNumber = pNumber;
};

PhoneNumber.prototype.number = function() {
    var cleanedUp = this.pNumber.replace(/[^0-9]/g, '');

    // invalid
    if ((cleanedUp.length === 11 && cleanedUp[0] !== '1') ||
        (cleanedUp.length === 12) ||
        (cleanedUp.length === 9)) {
        return '0000000000';
    }

    // trim US code
    if ((cleanedUp.length === 11 && cleanedUp[0] === '1')) {
        cleanedUp = cleanedUp.substr(1, cleanedUp.length);
    }

    return cleanedUp;
};

PhoneNumber.prototype.areaCode = function() {
    return this.number().substr(0, 3);
};

PhoneNumber.prototype.toString = function() {
    var formatted = this.number();

    return "(" + this.areaCode() + ")" + " " +
            formatted.substr(3, 3) + "-" +
            formatted.substr(6, 4);
};

module.exports = PhoneNumber;