/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = {};
    for (let  i = 0; i < nums.length; i++) {
        if (nums[i] in freqMap) {
            freqMap[nums[i]]++;
        } else {
            freqMap[nums[i]] = 1;
        }
    }
    let array =[];
    for (let key in freqMap) {
        if (array[freqMap[key]]) {
            array[freqMap[key]].push(key);
        }
        else {
            array[freqMap[key]] = [key];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            array[i] = [];
        }
    }
    //console.log(array);
    let result = [];
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
            k--;
            if (k == 0)
                return result;
        }
    }
};