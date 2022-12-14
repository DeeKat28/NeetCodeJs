/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let product = 1;
    
    for (let i = 0; i < nums.length; i++) {
        answer[i] = product;
        product = product * nums[i];
    }
    
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * product;
        product = product * nums[i];
    }
    
    return answer;
};