/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arrT = t.split("");
    let counter = 0;
    for (let k = 0; k < arrT.length; k++) {
        let sw = false;
        for ( let i = 0; i < s.length; i++) {
            if (s.charAt(i) == arrT[k]) {
                sw = true;
                counter++;
                break;
            }
        }
        if (sw == false) {
            return arrT[k];
        }
        if (counter == s.length) {
            return arrT[k+1];
        }
    }
};
let answer = findTheDifference("abcd","abcde");
console.log(answer)