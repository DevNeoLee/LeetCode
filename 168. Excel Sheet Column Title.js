/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let arr = [];
    while ( n > 0 ) {
        let num = n % 26;
        if ( num == 0) {
            val = 26;
        }
        arr.push(String.fromCharCode(num + 64));
        console.log(arr)
        n = (n - num) / 26;
    }
    console.log(arr)
    return arr.join("");


    // if (n < 27) {
    //     return String.fromCharCode(n + 64);
    // } 
    // String.fromCharCode()
    // console.log(str.charCodeAt(0))  A == 65
};


console.log(convertToTitle(27))

console.log(27 % 26) // 余り
console.log(Math.floor(27 / 26)) // 商