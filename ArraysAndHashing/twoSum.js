/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // let indices = [];
    // for (let i = 0; i < nums.length-1; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             indices.push(i);
    //             indices.push(j);
    //             break;
    //         }
    //     }
    // }
    // return indices;
    
    
    let indices = [];
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (difference in hashMap) {
            indices.push(hashMap[difference]);
            indices.push(i);
            break;
        } else {
            hashMap[nums[i]] = i;
        }
    }
    return indices;
};