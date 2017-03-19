/**
 * Created by vunguyen on 3/19/17.
 */
var GradeSchool = function () {
    this._roster = {};
};

GradeSchool.prototype.roster = function () {
    return this._roster;
};

GradeSchool.prototype.add = function (name, grade) {
    if (this._roster.hasOwnProperty(grade)) {
        this._roster[grade].push(name);
        this._roster[grade].sort(function(a, b) {
            if (a > b) return 1; return -1;
        });
    } else {
        this._roster[grade] = [name];
    }
};

GradeSchool.prototype.grade = function (n) {
    if (this._roster.hasOwnProperty(n)) {
        return this._roster[n];
    } else {
        return [];
    }
};

module.exports = GradeSchool;