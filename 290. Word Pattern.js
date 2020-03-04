/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let listS = str.split(" ");
    if (pattern.length != listS.length) {
        return false;
    }

    let listP = pattern.split("");

    let listN = {};
    for (let i = 0; i < listP.length; i++) {
        listN[listP[i]] = listS[i];
    }
    console.log(listN)
    let check1 = [];
    for (let k = 0; k < listP.length; k++) {
    check1 = listN.map(item => ({
        k: item[listP[k]]
    }));
}
console.log(check1)
};

wordPattern("abba","dog cat cat dog")