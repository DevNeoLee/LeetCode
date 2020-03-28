/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */


var compareVersion = function(version1, version2) {
    let v1 = version1.split(/['.'0]/);
    let v2 = version2.split(/['.'0]/);
    console.log(v1, v2)
    let shorter = v1;
    let longer = v2;

    if (shorter > longer) {
        shorter = v2;
        longer = v1;
    }

    for (let i = 0; i <= (longer.length - shorter.length); i++) {
        shorter.push('0');
    }
    return Number(v1.join('')) > Number(v2.join('')) ? 1 : -1;
};


let answer = compareVersion("1.0.1",  "1");

console.log(answer)