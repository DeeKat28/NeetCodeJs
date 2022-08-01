/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = {};
    for (let i = 0; i < strs.length; i++) {
        
        let key = strs[i].split('').sort().join('');
        if (key in hashMap) {
            hashMap[key].push(strs[i]);
        }
        else {
            hashMap[key] = [strs[i]];
        }
    }
    let result = [];
    for (let val in hashMap) {
        result.push(hashMap[val]);
    }
    return result;
};