/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hash = new Set(nums);
    // for (let i = 0; i < nums.length; i++) {
    //     hash.add(nums[i]);
    // }
    
    let longestLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (hash.has((nums[i] - 1))) {
            continue;
        }
        let length = 0;
        while (hash.has((nums[i] + length))) {
            length++;
        }
        longestLength = Math.max(length, longestLength);
    }
    return longestLength;
    
//     const set = new Set(nums)
//     let longest = 0, count
    
//     const searchLeft = (e) => {
//         if (!set.has(e)) return
//         set.delete(e)
//         count++
//         searchLeft(e-1)
//         return
//     }
    
//     const searchRight = (e) => {
//         if (!set.has(e)) return
//         set.delete(e)
//         count++
//         searchRight(e+1)
//         return
//     }
    
//     for (const e of set) {
//         count = 1
//         searchLeft(e - 1)
//         searchRight(e + 1)
//         longest = Math.max(count, longest)
//     }
//     return max
};