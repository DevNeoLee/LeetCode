/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
const convertArr = letters => {
    let start = 1;
    let arr = letters.split("").reverse().map((data, index) => {
        return index == 0 ? Number(data) : Number(data) * (2**start++)}).reduce((a, b) =>{
            console.log(a)
            return a + b})
    return arr
}

var addBinary = function(a, b) {
    let arrA = convertArr(a)
    let arrB = convertArr(b)
    console.log(arrA)
    console.log(arrB)
    let sum = (arrA + arrB)
    console.log(sum)
    let binary = []
    while(sum > 1) {
        if(sum % 2 == 1){
            binary.unshift(1)
        } else {
            binary.unshift(0)
        }
        sum = Math.floor(sum / 2)
    }
    binary.unshift(sum)
  return binary.join("")
};

// 24847893154024981730169397005

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))