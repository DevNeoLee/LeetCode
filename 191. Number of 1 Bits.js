/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let list = n.toString(2).split("");
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "1") {
            counter++;
        }
    }
    return counter;
};

console.log(hammingWeight(00000000000000000000000000001011))