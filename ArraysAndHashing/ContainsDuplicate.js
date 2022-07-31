/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums.sort((a,b) => a-b);
    // for (let i = 0; i < nums.length-1; i++) {
    //     if (nums[i] == nums[i+1]) {
    //         return true;
    //     }
    // }
    // return false;
    
//     let hashMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in hashMap) {
//             return true;
//         } else {
//             hashMap[nums[i]] = i;
//         }
//     }
//     return false;
    
    return [...new Set(nums)].length !== nums.length;
};