/**
 * @param {number} num
 * @return {number}
 */

 
var numberOfSteps  = function(num) {  
    var helper = function (num, arr) {
    arr.push(num)
    if (num <= 1){
        return
    }else{
    if (num % 2 === 0){
    return  helper(Math.floor(num / 2), arr)
        } else {
    return helper(num - 1, arr)
        }
    }
};
       
    
    let list = [];
    helper(num, list)
    console.log(list)
    return list.length
    
};