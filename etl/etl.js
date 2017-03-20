/**
 * Created by vunguyen on 3/20/17.
 */
var ETL = function () {

};

ETL.prototype.transform = function (_old) {
    var _new = {};

    for (var score in _old) {
        for (var letter of _old[score]) {
            _new[letter.toLowerCase()] = parseInt(score);
        }
    }

    return _new;
};

module.exports = ETL;