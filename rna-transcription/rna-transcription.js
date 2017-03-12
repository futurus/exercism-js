/**
 * Created by vunguyen on 3/12/17.
 */

var DnaTranscriber = function () {
};

DnaTranscriber.prototype.toRna = function (dnaStrand) {
    var rna = '';

    for (var i = 0; i < dnaStrand.length; i++) {
        switch (dnaStrand[i]) {
            case 'A':
                rna += 'U';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'G':
                rna += 'C';
                break;
            case 'T':
                rna += 'A';
                break;
            default:
                throw new Error('Invalid input');
                break;
        }
    }
    return rna;
};

module.exports = DnaTranscriber;